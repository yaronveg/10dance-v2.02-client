import "./FullscreenMessage.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IFullscreenMessage {
  title?: string;
  icon?: IconProp;
  subtitle?: string;
}

const FullscreenMessage = ({
  message: { title, icon, subtitle },
  onClick,
}: {
  message: IFullscreenMessage;
  onClick: () => void;
}) => {
  const classList = () => {
    let list = "icon";
    if (icon === faSpinner) list = list + " spin";
    return list;
  };

  return (
    <div className="fullscreen-message rtl" onClick={onClick}>
      {title && <div className="title">{title}</div>}
      {icon && <FontAwesomeIcon className={classList()} icon={icon} />}
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </div>
  );
};

export default FullscreenMessage;
