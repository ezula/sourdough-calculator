import PropTypes, { InferProps } from "prop-types";

export default function Ratios ({ flour = 0, water = 0, sourdough = 0, salt = 0 }
  : InferProps<typeof Ratios.propTypes>) {
  return (
    <div className="ratios-container small-container">
      <p>Mjöl: {flour} g</p>
      <p>Vatten: {water} g</p>
      <p>Surdeg: {sourdough} g <span className="small-text">(10%)</span></p>
      <p>Salt: {salt} g</p>
    </div>
  )
}

Ratios.propTypes = {
  flour: PropTypes.number.isRequired,
  water: PropTypes.number.isRequired,
  sourdough: PropTypes.number.isRequired,
  salt: PropTypes.number.isRequired,
};
