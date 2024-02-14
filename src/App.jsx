// export default function App() {
//   const items = ["Item 1", "Item 2", "Item 3"];
//   const htmlItems = items.map((item) => <li key={item}>{item}</li>);

//   return <ul>{htmlItems}</ul>;
// }

//inline example - common in React
// export default function App() {
//   const items = ["Item 1", "Item 2", "Item 3"];

//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }

import { trees } from "./Components/ArrayTrees";
import TreeCard from "./Components/TreeCard";

export default function App() {
  return (
    <div>
      {trees.map((tree) => (
        <TreeCard
          key={tree.id}
          treeName={tree.treeName}
          location={tree.location}
          imgLink={tree.imgLink}
        />
      ))}
    </div>
  );
}
