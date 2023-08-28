import React from 'react';
import { SearchBarProps } from '@/types/types';


const Search: React.FC<SearchBarProps> = ({ rangeStart, rangeEnd, setRangeStart, setRangeEnd, handleRangeSearch, handleClick }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-5">
            <div className="grid grid-cols-2 gap-2">
                <input
                    type="number"
                    min="1"
                    max="898"
                    value={rangeStart}
                    onChange={(e) => {
                        if (e.target.value === "") {
                            setRangeStart("");
                        } else {
                            setRangeStart(Math.max(1, Math.min(898, Number(e.target.value))));
                        }
                    }}
                    className="w-24 py-2 px-3 rounded border border-gray-300 mb-2"
                />
                <input
                    type="number"
                    min="1"
                    max="898"
                    value={rangeEnd}
                    onChange={(e) => {
                        if (e.target.value === "") {
                            setRangeEnd("");
                        } else {
                            setRangeEnd(Math.max(1, Math.min(898, Number(e.target.value))));
                        }
                    }}
                    className="w-24 py-2 px-3 rounded border border-gray-300 mb-2"
                />

            </div>
            <button
                onClick={() => {
                    handleRangeSearch();
                    handleClick();
                }}
                className="w-48 py-2 px-4 bg-blue-500 text-white rounded shadow"
            >
                範囲で検索
            </button>
        </div>
    )
}

export default Search;