import PropTypes, { InferProps } from "prop-types";

export default function Ratios({
  flour = 0,
  water = 0,
  sourdough = 0,
  salt = 0,
}: InferProps<typeof Ratios.propTypes>) {
  return (
    <div className="ratios-container small-container">
      <table>
        <tbody>
          <tr>
            <td className="ratios-label">Mjöl:</td>
            <td className="ratios-val">{flour}</td>
            <td>g</td>
          </tr>
          <tr>
            <td className="ratios-label">Vatten:</td>
            <td className="ratios-val">{water}</td>
            <td>g</td>
          </tr>
          <tr>
            <td className="ratios-label">* Surdeg:</td>
            <td className="ratios-val">{sourdough}</td>
            <td>g</td>
          </tr>
          <tr>
            <td className="ratios-label">Salt:</td>
            <td className="ratios-val">{salt}</td>
            <td>g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Ratios.propTypes = {
  flour: PropTypes.number.isRequired,
  water: PropTypes.number.isRequired,
  sourdough: PropTypes.number.isRequired,
  salt: PropTypes.number.isRequired,
};
