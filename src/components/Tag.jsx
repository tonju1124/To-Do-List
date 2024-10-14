import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        Gehenna: { backgroundColor: "#e04944" },
        Trinity: { backgroundColor: "#ffd12c" },
        Millennium: { backgroundColor: "#0455f6" },
        Abydos: { backgroundColor: "#57cbf1" },
        Hyakkiyako: { backgroundColor: "#da5085" },
        ShangHaiJing: { backgroundColor: "#03c03c" },
        Red_Winter: { backgroundColor: "#af3a58" },
        Valkyrie: { backgroundColor: "#9aa2d7" },
        SRT: { backgroundColor: "#9aa2d7" },    
        default: { backgroundColor: "#f9f9f9" },
    };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
