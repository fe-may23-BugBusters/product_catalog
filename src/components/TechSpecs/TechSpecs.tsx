/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import './sass/TechSpecs.scss';

type PropsSpec = {
  camera: string;
  capacity: string;
  cell: string[];
  processor: string;
  ram: string;
  resolution: string;
  screen: string;
  zoom: string;
};

export const TechSpecs: React.FC<PropsSpec> = ({
  camera,
  capacity,
  cell,
  processor,
  ram,
  resolution,
  screen,
  zoom,
}) => {
  return (
    <div className="tech">
      <h2 className="tech_h2 line-separator2">Tech specs</h2>
      <table className="tech_table ">
        <tbody className="tech_table--body">
          <tr className="tech_table--row">
            <td className="tech_table--column1">Screen</td>
            <td className="tech_table--column2">{screen}</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">Resolution</td>
            <td className="tech_table--column2">{resolution}</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">Processor</td>
            <td className="tech_table--column2">{processor}</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">RAM</td>
            <td className="tech_table--column2">{ram}</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">Built in memory</td>
            <td className="tech_table--column2">{capacity}</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1 camera">Camera</td>
            <td className="tech_table--column2">{camera}</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">Zoom</td>
            <td className="tech_table--column2">{zoom}</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">Cell</td>
            <td className="tech_table--column2">{cell.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
