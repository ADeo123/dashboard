import { html } from 'lit';
import '../src/dashboard-search.js';

export default {
  title: 'DashboardSearch',
  component: 'dashboard-search',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <dashboard-search
      style="--dashboard-search-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </dashboard-search>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
