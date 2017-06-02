import template   from './goatListItem.html';
import controller from './goatListItem.controller';
import './goatListItem.less';

const goatListItemComponent = {
  restrict: 'E',
  bindings: {
    goat: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

//sffsfsf

export default goatListItemComponent;
