import * as tslib_1 from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
import { Sticky, StickyContainer } from '../../sticky';
import Tabs from '../src';
const tabs = [
    { title: 'First Tab', key: 't1' },
    { title: 'Second Tab', key: 't2' },
    { title: 'Third Tab', key: 't3' }
];
let TabsExample = class TabsExample extends Vue {
    renderTabBar(props) {
        return <Sticky>
      <div style={{ zIndex: 1 }}><Tabs.DefaultTabBar attrs={props}/></div>
    </Sticky>;
    }
    render() {
        return <div>
      <m-white-space />
      <StickyContainer>
        <m-tabs tabs={tabs} initialPage={'t2'} renderTabBar={this.renderTabBar}>
          <div key="t1" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px',
            backgroundColor: '#fff'
        }}>
            Content of first tab
          </div>
          <div key="t2" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px',
            backgroundColor: '#fff'
        }}>
            Content of second tab
          </div>
          <div key="t3" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px',
            backgroundColor: '#fff'
        }}>
            Content of third tab
          </div>
        </m-tabs>
      </StickyContainer>
      <m-white-space />
    </div>;
    }
};
TabsExample = tslib_1.__decorate([
    Component({
        name: 'TabsExample'
    })
], TabsExample);
export default TabsExample;
//# sourceMappingURL=demo2.jsx.map