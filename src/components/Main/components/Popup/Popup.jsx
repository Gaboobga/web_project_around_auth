export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <section className="popup popup_opened">
      <div
        className={`popup__container ${
          !title ? "popup__container_type_image" : ""
        }`}
      >
        <button
          aria-label="Close modal"
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </section>
  );
}
