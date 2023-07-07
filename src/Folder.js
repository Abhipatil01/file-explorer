import { useState } from "react";

export default function Folder({ explorer }) {
  const [isExpand, setIsExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <span
          style={{ textDecoration: "underline" }}
          onClick={() => setIsExpand(!isExpand)}
        >
          {explorer.name}
          <br />
        </span>
        <div style={{ display: isExpand ? "block" : "none", paddingLeft: 15 }}>
          {explorer.items.map((exp) => (
            <Folder explorer={exp} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <span>
      {explorer.name}
      <br />
    </span>
  );
}
