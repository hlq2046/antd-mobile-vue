import * as tslib_1 from "tslib";
import classnames from 'classnames';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
let ActivityIndicator = class ActivityIndicator extends Vue {
    render() {
        const { prefixCls, className, animating, toast, size, text } = this;
        const wrapClass = classnames(prefixCls, className, {
            [`${prefixCls}-lg`]: size === 'large',
            [`${prefixCls}-sm`]: size === 'small',
            [`${prefixCls}-toast`]: toast
        });
        const spinnerClass = classnames(`${prefixCls}-spinner`, {
            [`${prefixCls}-spinner-lg`]: toast || size === 'large'
        });
        if (animating) {
            if (toast) {
                return (<div class={wrapClass}>
              {text ? (<div class={`${prefixCls}-content`}>
                    <span class={spinnerClass} aria-hidden="true"/>
                    <span class={`${prefixCls}-toast`}>{text}</span>
                  </div>) : (<div class={`${prefixCls}-content`}>
                    <span class={spinnerClass} aria-label="Loading"/>
                  </div>)}
            </div>);
            }
            else {
                return text ? (<div class={wrapClass}>
              <span class={spinnerClass} aria-hidden="true"/>
              <span class={`${prefixCls}-tip`}>{text}</span>
            </div>) : (<div class={wrapClass}>
              <span class={spinnerClass} aria-label="loading"/>
            </div>);
            }
        }
        else {
            return null;
        }
    }
};
tslib_1.__decorate([
    Prop({
        type: String,
        default: 'am-activity-indicator'
    })
], ActivityIndicator.prototype, "prefixCls", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], ActivityIndicator.prototype, "className", void 0);
tslib_1.__decorate([
    Prop({
        type: Boolean,
        default: true
    })
], ActivityIndicator.prototype, "animating", void 0);
tslib_1.__decorate([
    Prop({
        type: Boolean,
        default: false
    })
], ActivityIndicator.prototype, "toast", void 0);
tslib_1.__decorate([
    Prop({ default: 'small' })
], ActivityIndicator.prototype, "size", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], ActivityIndicator.prototype, "text", void 0);
ActivityIndicator = tslib_1.__decorate([
    Component({
        name: 'ActivityIndicator'
    })
], ActivityIndicator);
export default ActivityIndicator;
//# sourceMappingURL=index.jsx.map