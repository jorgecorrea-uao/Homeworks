import { useState } from "react";
import { Trie } from "./structures/Trie";
import { MaxHeap } from "./structures/MaxHeap";
import { Graph } from "./structures/Graph";
import SearchCard from "./components/SearchCard";
import TopCard from "./components/TopCard";
import RelatedCard from "./components/RelatedCard";
import AddSongCard from "./components/AddSongCard";
import "./App.scss";

const songs = [
  { title: "blinding lights", plays: 1200 },
  { title: "shape of you", plays: 1100 },
  { title: "despacito", plays: 1050 },
  { title: "bohemian rhapsody", plays: 980 },
  { title: "thriller", plays: 900 },
  { title: "billie jean", plays: 870 },
  { title: "starboy", plays: 760 },
  { title: "bad guy", plays: 640 },
];

const relations = [
  ["blinding lights", "starboy"],
  ["blinding lights", "shape of you"],
  ["shape of you", "despacito"],
  ["thriller", "billie jean"],
  ["thriller", "starboy"],
  ["bad guy", "blinding lights"],
];

function createData() {
  const trie = new Trie();
  const heap = new MaxHeap();
  const graph = new Graph();
  songs.forEach((song) => {
    trie.insert(song.title);
    heap.push(song);
    graph.addNode(song.title);
  });
  relations.forEach(([a, b]) => graph.addEdge(a, b));
  return { trie, heap, graph };
}

export default function App() {
  const [{ trie, heap, graph }] = useState(createData);
  const [selected, setSelected] = useState("blinding lights");
  const [, setTick] = useState(0);

  return (
    <div className="app">
      <h1>Spotify Educación</h1>

      <div className="grid">
        <SearchCard trie={trie} onSelect={setSelected} />
        <TopCard heap={heap} onSelect={setSelected} />
        <RelatedCard graph={graph} selected={selected} onSelect={setSelected} />
        <AddSongCard trie={trie} heap={heap} graph={graph} onChange={() => setTick((t) => t + 1)} />
      </div>
    </div>
  );
}