Nehan.SelectorValue = (function(){
  /**
   @memberof Nehan
   @class Nehan.SelectorValue
   @param raw_entries {Object} - unformatted css entries
   @constructor
   */
  function SelectorValue(raw_entries){
    this.entries = this._initialize(raw_entries);
  }

  SelectorValue.prototype._initialize = function(entries){
    var fmt_entries = {};
    for(var prop in entries){
      var entry = Nehan.CssParser.formatEntry(prop, entries[prop]);
      fmt_entries[entry.getPropName()] = entry.getValue();
    }
    return fmt_entries;
  };

  /**
   @memberof Nehan.SelectorValue
   @param dst_value {Nehan.SelectorValue}
   @return {Nehan.Selector} - merged selector
   */
  SelectorValue.prototype.merge = function(dst_value){
    var fmt_values = dst_value.getEntries();
    for(var fmt_prop in fmt_values){
      var fmt_value = fmt_values[fmt_prop];
      var old_value = this.entries[fmt_prop] || null;
      if(old_value && typeof old_value === "object" && typeof fmt_value === "object"){
	Nehan.Args.copy(old_value, fmt_value);
      } else {
	this.entries[fmt_prop] = fmt_value;
      }
    }
    return this;
  };

  SelectorValue.prototype.getEntry = function(key){
    return this.entries[key] || null;
  };

  SelectorValue.prototype.getEntries = function(key){
    return this.entries;
  };

  return SelectorValue;
})();
