"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  behaviors: [],
  properties: {
    number: {
      type: [Number, String],
      value: 0,
      observer: function observer(newVal) {
        this.setData({
          number: parseInt(newVal, 10)
        });
      }
    },
    max: {
      type: [Number, String],
      value: 1,
      observer: function observer(newVal) {
        this.setData({
          max: parseInt(newVal, 10)
        });
      }
    },
    min: {
      type: [Number, String],
      value: 0,
      observer: function observer(newVal) {
        this.setData({
          min: parseInt(newVal, 10)
        });
      }
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  attached: function attached() {},
  methods: {
    addHandler: function addHandler(e) {
      var min = this.data.min;
      var max = this.data.max;
      var disabled = this.data.disabled;
      if (max <= this.data.number || disabled) return;
      this.setData({
        number: ++this.data.number
      });
      this.triggerEvent('changenumber', {
        e: e,
        number: this.data.number,
        min: min,
        max: max,
        type: 'add'
      });
    },
    minusHandler: function minusHandler(e) {
      var min = this.data.min;
      var max = this.data.max;
      var disabled = this.data.disabled;
      if (min >= this.data.number || disabled) return;
      this.setData({
        number: --this.data.number
      });
      this.triggerEvent('changenumber', {
        e: e,
        number: this.data.number,
        min: min,
        max: max,
        type: 'minus'
      });
    },
    initNumber: function initNumber() {
      this.setData({
        number: 1
      })
    },
    updateNumber: function updateNumber(e) {
      this.setData({
        number: e
      })
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwibnVtYmVyIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsInZhbHVlIiwib2JzZXJ2ZXIiLCJuZXdWYWwiLCJzZXREYXRhIiwicGFyc2VJbnQiLCJtYXgiLCJtaW4iLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJkYXRhIiwiYXR0YWNoZWQiLCJtZXRob2RzIiwiYWRkSGFuZGxlciIsImUiLCJ0cmlnZ2VyRXZlbnQiLCJtaW51c0hhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1FQSxhQUFXLEU7QUFDWEMsY0FBWTtBQUNWQyxZQUFRO0FBQ05DLFlBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBREE7QUFFTkMsYUFBTyxDQUZEO0FBR05DLGdCQUFVLGtCQUFVQyxNQUFWLEVBQWtCO0FBQzFCLGFBQUtDLE9BQUwsQ0FBYTtBQUNYUCxrQkFBUVEsU0FBU0YsTUFBVCxFQUFpQixFQUFqQjtBQURHLFNBQWI7QUFHRDtBQVBLLEtBREU7QUFVVkcsU0FBSztBQUNIUixZQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLGFBQU8sQ0FGSjtBQUdIQyxnQkFBVSxrQkFBVUMsTUFBVixFQUFrQjtBQUMxQixhQUFLQyxPQUFMLENBQWE7QUFDWEUsZUFBS0QsU0FBU0YsTUFBVCxFQUFpQixFQUFqQjtBQURNLFNBQWI7QUFHRDtBQVBFLEtBVks7QUFtQlZJLFNBQUs7QUFDSFQsWUFBTSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FESDtBQUVIQyxhQUFPLENBRko7QUFHSEMsZ0JBQVUsa0JBQVVDLE1BQVYsRUFBa0I7QUFDMUIsYUFBS0MsT0FBTCxDQUFhO0FBQ1hHLGVBQUtGLFNBQVNGLE1BQVQsRUFBaUIsRUFBakI7QUFETSxTQUFiO0FBR0Q7QUFQRSxLQW5CSztBQTRCVkssY0FBVTtBQUNSVixZQUFNVyxPQURFO0FBRVJSLGFBQU87QUFGQztBQTVCQSxHO0FBaUNaUyxRQUFNLEU7QUFDTkMsWUFBVSxvQkFBWSxDQUNyQixDO0FBQ0RDLFdBQVM7QUFDUEMsY0FETyxzQkFDS0MsQ0FETCxFQUNRO0FBQ2IsVUFBSVAsTUFBTSxLQUFLRyxJQUFMLENBQVVILEdBQXBCO0FBQ0EsVUFBSUQsTUFBTSxLQUFLSSxJQUFMLENBQVVKLEdBQXBCO0FBQ0EsVUFBSUUsV0FBVyxLQUFLRSxJQUFMLENBQVVGLFFBQXpCO0FBQ0EsVUFBSUYsT0FBTyxLQUFLSSxJQUFMLENBQVViLE1BQWpCLElBQTJCVyxRQUEvQixFQUF5QztBQUN6QyxXQUFLSixPQUFMLENBQWE7QUFDWFAsZ0JBQVEsRUFBRSxLQUFLYSxJQUFMLENBQVViO0FBRFQsT0FBYjtBQUdBLFdBQUtrQixZQUFMLENBQWtCLGNBQWxCLEVBQWtDO0FBQ2hDRCxZQURnQztBQUVoQ2pCLGdCQUFRLEtBQUthLElBQUwsQ0FBVWIsTUFGYztBQUdoQ1UsZ0JBSGdDO0FBSWhDRCxnQkFKZ0M7QUFLaENSLGNBQU07QUFMMEIsT0FBbEM7QUFPRCxLQWhCTTtBQWlCUGtCLGdCQWpCTyx3QkFpQk9GLENBakJQLEVBaUJVO0FBQ2IsVUFBSVAsTUFBTSxLQUFLRyxJQUFMLENBQVVILEdBQXBCO0FBQ0EsVUFBSUQsTUFBTSxLQUFLSSxJQUFMLENBQVVKLEdBQXBCO0FBQ0EsVUFBSUUsV0FBVyxLQUFLRSxJQUFMLENBQVVGLFFBQXpCO0FBQ0EsVUFBSUQsT0FBTyxLQUFLRyxJQUFMLENBQVViLE1BQWpCLElBQTJCVyxRQUEvQixFQUF5QztBQUN6QyxXQUFLSixPQUFMLENBQWE7QUFDWFAsZ0JBQVEsRUFBRSxLQUFLYSxJQUFMLENBQVViO0FBRFQsT0FBYjtBQUdBLFdBQUtrQixZQUFMLENBQWtCLGNBQWxCLEVBQWtDO0FBQ2hDRCxZQURnQztBQUVoQ2pCLGdCQUFRLEtBQUthLElBQUwsQ0FBVWIsTUFGYztBQUdoQ1UsZ0JBSGdDO0FBSWhDRCxnQkFKZ0M7QUFLaENSLGNBQU07QUFMMEIsT0FBbEM7QUFPSDtBQWhDTSIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbmZpZzoge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgXCJ3eGMtaWNvblwiOiBcIkBtaW51aS93eGMtaWNvblwiXG4gICAgfVxuICB9LFxuICBiZWhhdmlvcnM6IFtdLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbnVtYmVyOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIG51bWJlcjogcGFyc2VJbnQobmV3VmFsLCAxMClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG1heDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIHZhbHVlOiAxLFxuICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBtYXg6IHBhcnNlSW50KG5ld1ZhbCwgMTApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBtaW46IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICB2YWx1ZTogMCxcbiAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgbWluOiBwYXJzZUludChuZXdWYWwsIDEwKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHt9LFxuICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWRkSGFuZGxlciAoZSkge1xuICAgICAgbGV0IG1pbiA9IHRoaXMuZGF0YS5taW47XG4gICAgICBsZXQgbWF4ID0gdGhpcy5kYXRhLm1heDtcbiAgICAgIGxldCBkaXNhYmxlZCA9IHRoaXMuZGF0YS5kaXNhYmxlZDtcbiAgICAgIGlmIChtYXggPD0gdGhpcy5kYXRhLm51bWJlciB8fCBkaXNhYmxlZCkgcmV0dXJuO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbnVtYmVyOiArK3RoaXMuZGF0YS5udW1iZXJcbiAgICAgIH0pXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlbnVtYmVyJywge1xuICAgICAgICBlLFxuICAgICAgICBudW1iZXI6IHRoaXMuZGF0YS5udW1iZXIsXG4gICAgICAgIG1pbixcbiAgICAgICAgbWF4LFxuICAgICAgICB0eXBlOiAnYWRkJ1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBtaW51c0hhbmRsZXIgKGUpIHtcbiAgICAgICAgbGV0IG1pbiA9IHRoaXMuZGF0YS5taW47XG4gICAgICAgIGxldCBtYXggPSB0aGlzLmRhdGEubWF4O1xuICAgICAgICBsZXQgZGlzYWJsZWQgPSB0aGlzLmRhdGEuZGlzYWJsZWQ7XG4gICAgICAgIGlmIChtaW4gPj0gdGhpcy5kYXRhLm51bWJlciB8fCBkaXNhYmxlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIG51bWJlcjogLS10aGlzLmRhdGEubnVtYmVyXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlbnVtYmVyJywge1xuICAgICAgICAgIGUsXG4gICAgICAgICAgbnVtYmVyOiB0aGlzLmRhdGEubnVtYmVyLFxuICAgICAgICAgIG1pbixcbiAgICAgICAgICBtYXgsXG4gICAgICAgICAgdHlwZTogJ21pbnVzJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=