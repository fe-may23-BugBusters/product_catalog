/* eslint-disable max-len */
import React from 'react';
import './sass/TechSpecs.scss';

export const TechSpecs: React.FC = () => {
  return (
    <div className="tech">
      <h2 className="tech_h2 line-separator2">Tech specs</h2>
      <table className="tech_table ">
        <tbody className="tech_table--body">
          <tr className="tech_table--row">
            <td className="tech_table--column1">Screen</td>
            <td className="tech_table--column2">6.5&quot; OLED</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">Resolution</td>
            <td className="tech_table--column2">2688x1242</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">Processor</td>
            <td className="tech_table--column2">Apple A12 Bionic</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">RAM</td>
            <td className="tech_table--column2">3 GB</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">Built in memory</td>
            <td className="tech_table--column2">64 GB</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1 camera">Camera</td>
            <td className="tech_table--column2">12 Mp + 12 Mp + 12 Mp (Triple)</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">Zoom</td>
            <td className="tech_table--column2">Optical, 2x</td>
          </tr>
          <tr className="tech_table--row">
            <td className="tech_table--column1">Cell</td>
            <td className="tech_table--column2">GSM, LTE, UMTS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
