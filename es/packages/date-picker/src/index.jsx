import * as tslib_1 from "tslib";
import Component from 'vue-class-component';
import { Prop, Provide } from 'vue-property-decorator';
import { getComponentLocale } from '../../utils/getLocale';
import { setProps } from '../../utils/vnode';
import RCDatePicker from '../../vmc-date-picker/date-picker';
import PopupDatePicker from '../../vmc-date-picker/popup';
import DatePickerProps from './props-type';
import { formatFn } from './utils';
let DatePicker = class DatePicker extends DatePickerProps {
    constructor() {
        super(...arguments);
        this.store = {
            onOk: null
        };
    }
    setScrollValue(v) {
        this.scrollValue = v;
    }
    onOk(v) {
        let value = v;
        if (this.scrollValue !== undefined) {
            value = this.scrollValue;
        }
        this.$emit('change', value);
        this.$emit('ok', value);
    }
    onVisibleChange(visible) {
        this.scrollValue = undefined;
        this.$emit('visible-change', visible);
    }
    fixOnOk(picker) {
        if (picker) {
            picker.onOk = this.onOk;
        }
    }
    render() {
        // tslint:disable-next-line:no-this-assignment
        const { value, popupPrefixCls } = this;
        const locale = getComponentLocale(this.$props, null, 'DatePicker', () => require('./locale/zh_CN'));
        const { okText, dismissText, extra, DatePickerLocale } = locale;
        /**
         * 注意:
         * 受控 表示 通过设置 value 属性、组件的最终状态跟 value 设置值一致。
         * 默认不设置 value 或 只设置 defaultValue 表示非受控。
         *
         * DatePickerView 对外通过 value “只支持 受控” 模式（可以使用 defaultDate 支持 非受控 模式，但不对外）
         * PickerView 对外通过 value “只支持 受控” 模式
         *
         * DatePicker / Picker 对外只有 value 属性 (没有 defaultValue)，
         * 其中 List 展示部分 “只支持 受控” 模式，
         * 弹出的 选择器部分 会随外部 value 改变而变、同时能自由滚动
         * （即不会因为传入的 value 不变而不能滚动 (不像原生 input 的受控行为)）
         *
         */
        const datePicker = (
        // @ts-ignore
        <RCDatePicker minuteStep={this.minuteStep} locale={DatePickerLocale} minDate={this.minDate} maxDate={this.maxDate} mode={this.mode} pickerPrefixCls={this.pickerPrefixCls} prefixCls={this.prefixCls} date={value || new Date()} use12Hours={this.use12Hours} onInput={(v) => {
            this.onInput(v);
        }} onValueChange={(...args) => {
            this.$emit('value-change', ...args);
        }} onScrollChange={this.setScrollValue}/>);
        const childExtra = value ? formatFn(this, value) : (this.extra || extra || this.placeholder);
        return (<PopupDatePicker datePicker={datePicker} WrapComponent={'div'} transitionName={'am-slide-up'} maskTransitionName={'am-fade'} {...this.$props} title={this.title} prefixCls={popupPrefixCls} date={value || new Date()} dismissText={this.dismissText || dismissText} okText={this.okText || okText} ref={this.fixOnOk} onVisibleChange={this.onVisibleChange}>
          {this.$slots.default && this.$slots.default.map(it => {
            setProps(it, { extra: childExtra, arrow: 'horizontal' });
            return it;
        })}
        </PopupDatePicker>);
    }
    onInput(v) {
        this.$emit('change', v);
        this.$emit('input', v);
    }
};
tslib_1.__decorate([
    Prop({ type: String, default: '' })
], DatePicker.prototype, "placeholder", void 0);
tslib_1.__decorate([
    Prop({
        type: String,
        default: 'am-picker'
    })
], DatePicker.prototype, "prefixCls", void 0);
tslib_1.__decorate([
    Prop({
        type: Boolean,
        default: false
    })
], DatePicker.prototype, "use12Hours", void 0);
tslib_1.__decorate([
    Prop({
        type: String,
        default: 'am-picker-col'
    })
], DatePicker.prototype, "pickerPrefixCls", void 0);
tslib_1.__decorate([
    Prop({
        type: String,
        default: 'am-picker-popup'
    })
], DatePicker.prototype, "popupPrefixCls", void 0);
tslib_1.__decorate([
    Provide('store')
], DatePicker.prototype, "store", void 0);
DatePicker = tslib_1.__decorate([
    Component({
        name: 'MDatePicker'
    })
], DatePicker);
export default DatePicker;
//# sourceMappingURL=index.jsx.map