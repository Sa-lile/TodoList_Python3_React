// import React from 'react';

import {
  MdOutlineDeleteOutline,
  MdEditNote,
  MdOutlineCheckBox,
} from "react-icons/md/index";

const Table = () => {
  return (
    <div className="py-8">
      <table className=" w-11/12 max-w-4xl">
        <thead className="border-b-2 border-black">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Checkbox
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              To Do
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Status
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Data Created
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">
              <span className="inline-block cursor-pointe">
                <MdOutlineCheckBox />
              </span>
            </td>
            <td className="p-3 text-sm">Lorem ipsum dolor</td>
            <td className="p-3 text-sm text-center">
              <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300">
                Done
              </span>
            </td>
            <td className="p-3 text-sm">22-04-2023</td>
            <td className="p-3 text-sm font-medium grid grid-flow-col item-center mt-5">
              Actions
              <span className="text-x1 cursor-pointe">
                <MdEditNote />
              </span>
              <span className="text-x1 cursor-pointe">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="p-3">
              <span className="inline-block cursor-pointe">
                <MdOutlineCheckBox />
              </span>
            </td>
            <td className="p-3 text-sm">Lorem ipsum dolor</td>
            <td className="p-3 text-sm text-center">
              <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300">
                Done
              </span>
            </td>
            <td className="p-3 text-sm">22-04-2023</td>
            <td className="p-3 text-sm font-medium grid grid-flow-col item-center mt-5">
              Actions
              <span className="text-x1 cursor-pointe">
                <MdEditNote />
              </span>
              <span className="text-x1 cursor-pointe">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="p-3">
              <span className="inline-block cursor-pointe">
                <MdOutlineCheckBox />
              </span>
            </td>
            <td className="p-3 text-sm">Lorem ipsum dolor</td>
            <td className="p-3 text-sm text-center">
              <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300">
                Done
              </span>
            </td>
            <td className="p-3 text-sm">22-04-2023</td>
            <td className="p-3 text-sm font-medium grid grid-flow-col item-center mt-5">
              Actions
              <span className="text-x1 cursor-pointe">
                <MdEditNote />
              </span>
              <span className="text-x1 cursor-pointe">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="p-3">
              <span className="inline-block cursor-pointe">
                <MdOutlineCheckBox />
              </span>
            </td>
            <td className="p-3 text-sm">Lorem ipsum dolor</td>
            <td className="p-3 text-sm text-center">
              <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300">
                Done
              </span>
            </td>
            <td className="p-3 text-sm">22-04-2023</td>
            <td className="p-3 text-sm font-medium grid grid-flow-col item-center mt-5">
              Actions
              <span className="text-x1 cursor-pointe">
                <MdEditNote />
              </span>
              <span className="text-x1 cursor-pointe">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="p-3">
              <span className="inline-block cursor-pointe">
                <MdOutlineCheckBox />
              </span>
            </td>
            <td className="p-3 text-sm">Lorem ipsum dolor</td>
            <td className="p-3 text-sm text-center">
              <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300">
                Done
              </span>
            </td>
            <td className="p-3 text-sm">22-04-2023</td>
            <td className="p-3 text-sm font-medium grid grid-flow-col item-center mt-5">
              Actions
              <span className="text-x1 cursor-pointe">
                <MdEditNote />
              </span>
              <span className="text-x1 cursor-pointe">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
