import { propTypes } from "./Icon.props"
import iconMap from "./assets/icon-map"

const EmptyIcon = () => <div />

const Icon = ({ name, size, color, ...rest }) => {
  const Icon = iconMap[name] || EmptyIcon
  return <Icon color={color} style={{ width: size, height: size }} {...rest} />
}

Icon.propTypes = propTypes

export default Icon
