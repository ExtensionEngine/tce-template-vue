import Display from './display/index.vue';
import Edit from './edit/index.vue';
import info from './info';
import Toolbar from './edit/Toolbar.vue';

/**
 * A method used to create the initial state of the element by declaring the
 * defaults for the elements props. Does not need to be defined.
 */
const initState = () => ({});
const initDisplayState = () => ({});

/**
 * The fields that need to be customized are:
 * name: a string that is displayed to a user in the editor
 * ui->icon: a string representing the name of the MDI (https://materialdesignicons.com/)
 * icon that is displayed to the user in the editor
 * ui->forceFullWidth: a boolean value which defines if the element can only be
 * added as full width element
 */
export default {
  ...info,
  name: 'Custom element',
  initState,
  Edit,
  Toolbar,
  initDisplayState,
  Display,
  ui: {
    icon: 'mdi-help-circle',
    forceFullWidth: true
  }
};
