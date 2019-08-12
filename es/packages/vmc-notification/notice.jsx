import * as tslib_1 from "tslib";
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';
import Component from 'vue-class-component';
import classNames from 'classnames';
let Notice = class Notice extends Vue {
    componentDidMount() {
        this.startCloseTimer();
    }
    componentWillUnmount() {
        this.clearCloseTimer();
    }
    close() {
        this.clearCloseTimer();
        this.onClose();
    }
    startCloseTimer() {
        if (this.duration) {
            this.closeTimer = setTimeout(() => {
                this.close();
            }, this.duration * 1000);
        }
    }
    clearCloseTimer() {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }
    render() {
        const componentClass = `${this.prefixCls}-notice`;
        const className = {
            [`${componentClass}`]: 1,
            [`${componentClass}-closable`]: this.closable
        };
        return (<div class={classNames(className)}>
        <div class={`${componentClass}-content`}>{this.$slots.default}</div>
        {this.closable ?
            <a tabIndex={0} onClick={this.close} class={`${componentClass}-close`}>
            <span class={`${componentClass}-close-x`}/>
          </a> : null}
      </div>);
    }
};
tslib_1.__decorate([
    Prop(Number)
], Notice.prototype, "duration", void 0);
tslib_1.__decorate([
    Prop(Function)
], Notice.prototype, "onClose", void 0);
tslib_1.__decorate([
    Prop()
], Notice.prototype, "children", void 0);
tslib_1.__decorate([
    Prop(String)
], Notice.prototype, "prefixCls", void 0);
tslib_1.__decorate([
    Prop(Boolean)
], Notice.prototype, "closable", void 0);
Notice = tslib_1.__decorate([
    Component({
        name: 'Notice'
    })
], Notice);
export default Notice;
//# sourceMappingURL=notice.jsx.map