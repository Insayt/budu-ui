<template>
  <b-btn
    class="b-select"
    icon-right="arrow-down"
    :type="buttonType"
    :size="buttonSize"
    :_inselect="true"
    :_inselectHasValue="isValue()"
    :class="{
      'b-select-checked': isValue(),
    }"
    @cancel="handleCancel"
  >
    <div class="b-select-inner">
      <div class="b-select-placeholder">
        {{ placeholder }}
      </div>
      <div class="b-select-value" v-if="date && !isDateObject()">
        {{ formatDate(date) }}
      </div>
      <div
        class="b-select-value"
        v-if="date && Object.keys(date).length && isDateObject()"
      >
        {{ formatDate(date.from) }} - {{ formatDate(date.to) }}
      </div>
    </div>
    <q-popup-proxy ref="content" :offset="[0, 8]" @input="showPopup">
      <div class="b-select-content">
        <div class="b-calendar">
          <div class="b-calendar__nav" v-if="isPopupShow">
            <template
              v-if="$refs.calendar && $refs.calendar.view === 'Calendar'"
            >
              <div class="b-calendar__date">
                <div class="b-calendar__month">{{ month }}</div>
                <div
                  class="b-calendar__year"
                  @click.stop="setCalendarView('Years')"
                >
                  {{ year }}
                </div>
              </div>
              <div class="b-calendar__arrow">
                <div class="b-calendar__left" @click="changeMonth(true)">
                  <b-icon name="arrow-left" color="$b-link" size="24"></b-icon>
                </div>
                <div class="b-calendar__right" @click="changeMonth(false)">
                  <b-icon name="arrow-right" color="$b-link" size="24"></b-icon>
                </div>
              </div>
            </template>
            <template v-if="$refs.calendar && $refs.calendar.view === 'Years'">
              <div class="b-calendar__date">
                <div
                  class="b-calendar__back"
                  @click.stop="setCalendarView('Calendar')"
                >
                  <b-icon name="arrow-left" color="$b-link" size="24"></b-icon>
                </div>
                <div class="b-calendar__month">Выберите год</div>
              </div>
            </template>
          </div>
          <q-date
            v-model="date"
            ref="calendar"
            mask="YYYY-MM-DD HH:mm"
            minimal
            flat
            :range="range"
            @navigation="navCalendar"
          />
        </div>
      </div>
    </q-popup-proxy>
  </b-btn>
</template>

<script>
import BBtn from "./b-btn";
import BIcon from "./b-icon";

export default {
  name: "b-datepicker",
  components: {
    BBtn,
    BIcon,
  },
  props: {
    options: Array,
    placeholder: String,
    range: {
      type: Boolean,
      default: false,
    },
    buttonSize: {
      type: String,
      default: "s",
    },
    buttonType: {
      type: String,
      default: "uncolored",
    },
  },
  data: function () {
    return {
      value: [],
      searchText: "",
      date: null,
      isPopupShow: false,
      dateText: {},
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    };
  },
  computed: {
    month() {
      return this.monthNames[this.dateText.month - 1];
    },
    year() {
      return this.dateText.year;
    },
  },
  methods: {
    isValue() {
      if (this.isDateObject()) {
        return !!Object.keys(this.date).length;
      } else {
        return !!this.date;
      }
    },
    formatDate(dt) {
      const d = new Date(dt);
      return d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
    },
    navCalendar(dt) {
      this.dateText = dt;
    },
    setCalendarView(type) {
      this.$refs.calendar.setView(type);
    },
    changeMonth(type) {
      this.$refs.calendar.offsetCalendar("month", type);
    },
    handleCancel() {
      this.date = null;
      this.$emit("input", null);
    },
    isDateObject() {
      return typeof this.date === "object" && this.date !== null;
    },
    showPopup(e) {
      setTimeout(() => {
        // Календарь почему то не сразу инициализируется в $refs - так что небольшой костыль
        this.isPopupShow = e;
      }, 50);
    },
    hasSomeParentTheClass(element, classname) {
      if (
        element.className &&
        element.className.split(" ").indexOf(classname) >= 0
      )
        return true;
      return (
        element.parentNode &&
        this.hasSomeParentTheClass(element.parentNode, classname)
      );
    },
    hideContent() {
      this.$refs.content.hide();
    },
    // popup-proxy почему то не закрывается при клике за его пределами - костыльнем :)
    onClickDocument(event) {
      if (
        !this.hasSomeParentTheClass(event.target, "b-select") &&
        !this.hasSomeParentTheClass(event.target, "b-select-content")
      ) {
        this.hideContent();
      }
    },
    onClickItem() {
      this.$nextTick(() => {
        this.hideContent();
      });
    },
  },
  beforeDestroy() {
    this.$root.$off("dropdown:clickItem");
    document.removeEventListener("click", this.onClickDocument);
  },
  mounted() {
    if (!this.date) {
      const dt = new Date();
      this.dateText = { year: dt.getFullYear(), month: dt.getMonth() + 1 };
    }
    // Обманим квазар - будто суем ему иконку fontawesome
    this.$q.iconSet.datetime.arrowLeft = "fas b-icon icon-arrow-left";
    this.$q.iconSet.datetime.arrowRight = "fas b-icon icon-arrow-right";

    this.$root.$on("dropdown:clickItem", this.onClickItem);
    document.addEventListener("click", this.onClickDocument);
  },
  watch: {
    date: function (newVal) {
      this.$emit("input", newVal);
    },
  },
};
</script>

<style lang="scss">
@import "../variables";
.b-select {
  min-width: 300px;
  padding: 12px 16px;
}
.b-select-content {
  padding: 6px;
  .q-date__navigation {
    display: none !important;
  }
}
.b-select-inner {
  text-align: left;
  font-size: 15px;
}
.b-select-placeholder {
  line-height: 34px;
}
.b-select-checked {
  .b-select-placeholder {
    font-size: 11px;
    line-height: 15px;
    color: $b-secondary-label;
  }
  .b-select-value {
    font-size: 13px;
    line-height: 19px;
  }
}
.b-select-filter {
  border-bottom: 1px solid $b-base-03;
  padding-bottom: 10px;
  margin-bottom: 6px;
}
.b-select-item {
  padding: 12px;
  border-radius: 6px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: $b-base-02;
  }
}
.b-select-empty {
  font-size: 13px;
  line-height: 20px;
  color: $b-secondary-label;
  text-align: center;
  padding-bottom: 6px;
}
.q-menu {
  border: 1px solid $b-base-04;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08) !important;
  border-radius: 8px !important;
  min-width: 300px;
}
.b-calendar {
  padding: 10px;
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }
  &__date {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
  }
  &__arrow {
    display: flex;
  }
  &__left {
    cursor: pointer;
  }
  &__right {
    cursor: pointer;
  }
  &__month {
    margin-right: 4px;
    text-transform: capitalize;
  }
  &__year {
    color: $b-link;
    cursor: pointer;
  }
  &__back {
    height: 24px;
    cursor: pointer;
    margin-right: 4px;
  }

  .q-date__view {
    min-height: auto;
    padding: 0;
  }
  .q-date__calendar-weekdays {
    margin-bottom: 10px;
    & > div {
      opacity: 1;
      font-size: 13px;
      line-height: 20px;
      text-transform: uppercase;
      color: $b-tertiary-label;
    }
  }
  .q-date__today {
    border: 1px solid $b-primary;
    box-shadow: none;
  }
  .q-btn {
    line-height: 20px;
    transition: none !important;
    &:hover:not(.bg-primary) {
      background-color: rgba(242, 108, 85, 0.12) !important;
    }
    .q-focus-helper {
      display: none !important;
    }
  }
  .bg-primary {
    background-color: $b-primary !important;
  }
  .text-primary {
    color: $b-primary !important;
  }
  .q-date__range {
    &:before {
      background-color: rgba(242, 108, 85, 0.12) !important;
      opacity: 1;
    }
    .block {
      color: black !important;
    }
  }
  .q-date__range-from {
    .q-btn {
      border-radius: 50% 0 0 50% !important;
    }
    &:before {
      background-color: rgba(242, 108, 85, 0.12) !important;
      opacity: 1;
    }
  }
  .q-date__range-to {
    .q-btn {
      border-radius: 0 50% 50% 0 !important;
    }
    &:before {
      background-color: rgba(242, 108, 85, 0.12) !important;
      opacity: 1;
    }
  }
  .q-date__years-item {
    margin-bottom: 15px;
    .q-btn--rectangle {
      border-radius: 100px;
      padding: 1px 10px;
    }
  }
}
</style>
