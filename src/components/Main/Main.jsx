import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

export default function Main({
  popup,
  onOpenPopup,
  onClosePopup,
  cards,
  onCardLike,
  onCardDelete,
  onAddPlaceSubmit,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />,
  };
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  return (
    <>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser?.avatar ?? null}
            alt="Avatar"
            className="profile__avatar"
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            aria-label="Editar foto de perfil"
            onClick={() => onOpenPopup(editAvatarPopup)}
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">
            {currentUser?.name || ""}
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Editar perfil"
              onClick={() => onOpenPopup(editProfilePopup)}
            />
          </h1>
          <p className="profile__occupation">{currentUser?.about || ""}</p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Agregar nuevo lugar"
          onClick={() => onOpenPopup(newCardPopup)}
        />
      </section>

      <ul className="cards" aria-live="polite">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            handleOpenPopup={onOpenPopup}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </>
  );
}