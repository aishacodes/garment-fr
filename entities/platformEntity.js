import { entity, persistence } from "simpler-state";

const defaultState = {
  isAuthWidgetActive: false,
  isCartWidgetAction: false,
};
export const platformEntity = entity(defaultState, [
  persistence("CV-Commerce"),
]);

export const toggleAuthWidget = () => {
  const state = platformEntity.get();

  platformEntity.set({
    ...state,
    isAuthWidgetActive: !state.isAuthWidgetActive,
  });
};

export const toggleCartWidget = () => {
  const state = platformEntity.get();

  platformEntity.set({
    ...state,
    isCartWidgetAction: !state.isCartWidgetAction,
  });
};
