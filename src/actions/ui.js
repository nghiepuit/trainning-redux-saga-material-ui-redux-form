import * as uiTypes from './../constants/ui';

export const showLoading = () => ({
  type: uiTypes.SHOW_LOADING,
});

export const hideLoading = () => ({
  type: uiTypes.HIDE_LOADING,
});

export const showSidebar = () => ({
  type: uiTypes.SHOW_SIDEBAR,
});

export const hideSidebar = () => ({
  type: uiTypes.HIDE_SIDEBAR,
});
