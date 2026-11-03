import { Graph } from 'react-d3-graph'

const config = {
  height: 460,
  width: 760,
  nodeHighlightBehavior: true,
  d3: { gravity: -300, linkLength: 110 },
  node: {
    fontSize: 14,
    highlightFontSize: 16,
    fontColor: '#212529',
    labelPosition: 'bottom',
    highlightStrokeColor: '#212529'
  },
  link: {
    strokeWidth: 2,
    highlightColor: '#212529'
  }
}

export const GrafoVisual = ({ data, onClickNode }) => (
  <div className="grafo">
    <Graph id="grafo-amigos" data={data} config={config} onClickNode={onClickNode} />
    <div className="leyenda">
      <span><i className="cuadro" /> Ciudad</span>
      <span><i className="circulo" /> Persona</span>
      <span><i className="linea gris" /> Vive en</span>
      <span><i className="linea verde" /> Amistad</span>
    </div>
  </div>
)