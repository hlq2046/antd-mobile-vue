import * as tslib_1 from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
import { Inject, Prop, Watch } from 'vue-property-decorator';
import { Models } from './data-types';
let SingleMonth = class SingleMonth extends Vue {
    constructor() {
        super(...arguments);
        this.state = {
            weekComponents: []
        };
    }
    beforeMount() {
        this.monthData.weeks.forEach((week, index) => {
            this.genWeek(week, index);
        });
    }
    mounted() {
        this.callback(this);
    }
    genWeek(weeksData, index) {
        const { getDateExtra, displayMode, monthData, locale, rowSize } = this;
        let rowCls = 'row';
        if (rowSize === 'xl') {
            rowCls += ' row-xl';
        }
        this.state.weekComponents[index] = (<div key={index} class={rowCls}>
          {weeksData.map((day, dayOfWeek) => {
            const extra = (getDateExtra && getDateExtra(new Date(day.tick), [...this.currentValue])) || {};
            let info = extra.info;
            const disable = extra.disable || day.outOfDate;
            let cls = 'date';
            let lCls = 'left';
            let rCls = 'right';
            let infoCls = 'info';
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                cls += ' grey';
            }
            if (disable) {
                cls += ' disable';
            }
            else if (info) {
                cls += ' important';
            }
            if (displayMode && extra.selected) {
                cls += ' date-selected selected-single';
            }
            if (day.selected) {
                cls += ' date-selected';
                let styleType = day.selected;
                switch (styleType) {
                    case Models.SelectType.Only:
                        info = locale.begin;
                        infoCls += ' date-selected';
                        break;
                    case Models.SelectType.All:
                        info = locale.begin_over;
                        infoCls += ' date-selected';
                        break;
                    case Models.SelectType.Start:
                        info = locale.begin;
                        infoCls += ' date-selected';
                        if (dayOfWeek === 6 || day.isLastOfMonth) {
                            styleType = Models.SelectType.All;
                        }
                        break;
                    case Models.SelectType.Middle:
                        if (dayOfWeek === 0 || day.isFirstOfMonth) {
                            if (day.isLastOfMonth || dayOfWeek === 6) {
                                styleType = Models.SelectType.All;
                            }
                            else {
                                styleType = Models.SelectType.Start;
                            }
                        }
                        else if (dayOfWeek === 6 || day.isLastOfMonth) {
                            styleType = Models.SelectType.End;
                        }
                        break;
                    case Models.SelectType.End:
                        info = locale.over;
                        infoCls += ' date-selected';
                        if (dayOfWeek === 0 || day.isFirstOfMonth) {
                            styleType = Models.SelectType.All;
                        }
                        break;
                }
                switch (styleType) {
                    case Models.SelectType.Single:
                    case Models.SelectType.Only:
                    case Models.SelectType.All:
                        cls += ' selected-single';
                        break;
                    case Models.SelectType.Start:
                        cls += ' selected-start';
                        rCls += ' date-selected';
                        break;
                    case Models.SelectType.Middle:
                        cls += ' selected-middle';
                        lCls += ' date-selected';
                        rCls += ' date-selected';
                        break;
                    case Models.SelectType.End:
                        cls += ' selected-end';
                        lCls += ' date-selected';
                        break;
                }
            }
            const defaultContent = [
                <div key={'wrapper'} class={'date-wrapper'}>
                  <span class={lCls}/>
                  <div class={cls}>
                    {day.dayOfMonth}
                  </div>
                  <span class={rCls}/>
                </div>,
                <div key={'info'} class={infoCls}>{info}</div>
            ];
            return (<div key={dayOfWeek} class={`cell ${extra.cellCls || ''}`} onClick={() => {
                if (!disable) {
                    if (!displayMode) {
                        this.$emit('cellClick', day, monthData);
                    }
                }
            }}>
                    {extra.cellRender ?
                extra.cellRender(new Date(day.tick))
                :
                    defaultContent}
                  </div>);
        })}
        </div>);
    }
    updateWeeks(monthData) {
        (monthData || this.monthData).weeks.forEach((week, index) => {
            this.genWeek(week, index);
        });
    }
    monthDataChanged(data) {
        this.updateWeeks(data);
    }
    setWarpper(dom) {
        this.wrapperDivDOM = dom;
    }
    render() {
        const { title } = this.monthData;
        const { weekComponents } = this.state;
        return (<div class={'single-month'} ref={this.setWarpper.bind(this)}>
          <div class={'month-title'}>
            {title}
          </div>
          <div class={'date'}>
            {weekComponents}
          </div>
        </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], SingleMonth.prototype, "displayMode", void 0);
tslib_1.__decorate([
    Inject('currentValue')
], SingleMonth.prototype, "currentValue", void 0);
tslib_1.__decorate([
    Prop({})
], SingleMonth.prototype, "locale", void 0);
tslib_1.__decorate([
    Prop({})
], SingleMonth.prototype, "monthData", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'normal' })
], SingleMonth.prototype, "rowSize", void 0);
tslib_1.__decorate([
    Prop({})
], SingleMonth.prototype, "getDateExtra", void 0);
tslib_1.__decorate([
    Prop({})
], SingleMonth.prototype, "callback", void 0);
tslib_1.__decorate([
    Watch('monthData')
], SingleMonth.prototype, "monthDataChanged", null);
SingleMonth = tslib_1.__decorate([
    Component({
        name: 'SingleMonth'
    })
], SingleMonth);
export default SingleMonth;
//# sourceMappingURL=single-month.jsx.map