import {
  require_react
} from "./chunk-23ZMGCJ2.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/react-mde/lib/js/util/MarkdownUtil.js
var require_MarkdownUtil = __commonJS({
  "node_modules/react-mde/lib/js/util/MarkdownUtil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getBreaksNeededForEmptyLineAfter = exports.getBreaksNeededForEmptyLineBefore = exports.selectWord = exports.getSurroundingWord = void 0;
    function getSurroundingWord(text, position) {
      if (!text)
        throw Error("Argument 'text' should be truthy");
      var isWordDelimiter = function(c) {
        return c === " " || c.charCodeAt(0) === 10;
      };
      var start = 0;
      var end = text.length;
      for (var i = position; i - 1 > -1; i--) {
        if (isWordDelimiter(text[i - 1])) {
          start = i;
          break;
        }
      }
      for (var i = position; i < text.length; i++) {
        if (isWordDelimiter(text[i])) {
          end = i;
          break;
        }
      }
      return { start, end };
    }
    exports.getSurroundingWord = getSurroundingWord;
    function selectWord(_a) {
      var text = _a.text, selection = _a.selection;
      if (text && text.length && selection.start === selection.end) {
        return getSurroundingWord(text, selection.start);
      }
      return selection;
    }
    exports.selectWord = selectWord;
    function getBreaksNeededForEmptyLineBefore(text, startPosition) {
      if (text === void 0) {
        text = "";
      }
      if (startPosition === 0)
        return 0;
      var neededBreaks = 2;
      var isInFirstLine = true;
      for (var i = startPosition - 1; i >= 0 && neededBreaks >= 0; i--) {
        switch (text.charCodeAt(i)) {
          case 32:
            continue;
          case 10:
            neededBreaks--;
            isInFirstLine = false;
            break;
          default:
            return neededBreaks;
        }
      }
      return isInFirstLine ? 0 : neededBreaks;
    }
    exports.getBreaksNeededForEmptyLineBefore = getBreaksNeededForEmptyLineBefore;
    function getBreaksNeededForEmptyLineAfter(text, startPosition) {
      if (text === void 0) {
        text = "";
      }
      if (startPosition === text.length - 1)
        return 0;
      var neededBreaks = 2;
      var isInLastLine = true;
      for (var i = startPosition; i < text.length && neededBreaks >= 0; i++) {
        switch (text.charCodeAt(i)) {
          case 32:
            continue;
          case 10: {
            neededBreaks--;
            isInLastLine = false;
            break;
          }
          default:
            return neededBreaks;
        }
      }
      return isInLastLine ? 0 : neededBreaks;
    }
    exports.getBreaksNeededForEmptyLineAfter = getBreaksNeededForEmptyLineAfter;
  }
});

// node_modules/react-mde/lib/js/util/ClassNames.js
var require_ClassNames = __commonJS({
  "node_modules/react-mde/lib/js/util/ClassNames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.classNames = void 0;
    function isString(classValue) {
      return typeof classValue === "string";
    }
    function isNonEmptyArray(classValue) {
      return Array.isArray(classValue) && classValue.length > 0;
    }
    function isClassDictionary(classValue) {
      return typeof classValue === "object";
    }
    function classNames() {
      var classValues = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        classValues[_i] = arguments[_i];
      }
      var classes = [];
      for (var i = 0; i < classValues.length; i++) {
        var classValue = classValues[i];
        if (!classValue)
          continue;
        if (isString(classValue)) {
          classes.push(classValue);
        } else if (isNonEmptyArray(classValue)) {
          var inner = classNames.apply(null, classValue);
          if (inner) {
            classes.push(inner);
          }
        } else if (isClassDictionary(classValue)) {
          for (var key in classValue) {
            if (classValue.hasOwnProperty(key) && classValue[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    exports.classNames = classNames;
  }
});

// node_modules/react-mde/lib/js/components/ToolbarButtonGroup.js
var require_ToolbarButtonGroup = __commonJS({
  "node_modules/react-mde/lib/js/components/ToolbarButtonGroup.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToolbarButtonGroup = void 0;
    var React = require_react();
    var ClassNames_1 = require_ClassNames();
    var ToolbarButtonGroup = function(props) {
      return React.createElement("ul", { className: ClassNames_1.classNames("mde-header-group", { hidden: props.hidden }) }, props.children);
    };
    exports.ToolbarButtonGroup = ToolbarButtonGroup;
  }
});

// node_modules/react-mde/lib/js/components/ToolbarButton.js
var require_ToolbarButton = __commonJS({
  "node_modules/react-mde/lib/js/components/ToolbarButton.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToolbarButton = void 0;
    var React = require_react();
    var defaultButtonProps = {
      tabIndex: -1
    };
    var ToolbarButton = function(props) {
      var buttonComponentClass = props.buttonComponentClass, buttonContent = props.buttonContent, buttonProps = props.buttonProps, onClick = props.onClick, readOnly = props.readOnly, name = props.name;
      var finalButtonProps = __assign(__assign({}, defaultButtonProps), buttonProps || {});
      var finalButtonComponent = buttonComponentClass || "button";
      return React.createElement("li", { className: "mde-header-item" }, React.createElement(finalButtonComponent, __assign(__assign({ "data-name": name }, finalButtonProps), {
        onClick,
        disabled: readOnly,
        type: "button"
      }), buttonContent));
    };
    exports.ToolbarButton = ToolbarButton;
  }
});

// node_modules/react-mde/lib/js/icons/MdeFontAwesomeIcon.js
var require_MdeFontAwesomeIcon = __commonJS({
  "node_modules/react-mde/lib/js/icons/MdeFontAwesomeIcon.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MdeFontAwesomeIcon = void 0;
    var React = require_react();
    var MdeFontAwesomeIcon = function(_a) {
      var icon = _a.icon;
      var transformedIcon = icon;
      switch (icon) {
        case "header":
          transformedIcon = "heading";
          break;
        case "quote":
          transformedIcon = "quote-right";
          break;
        case "unordered-list":
          transformedIcon = "tasks";
          break;
        case "ordered-list":
          transformedIcon = "list-ol";
          break;
        case "checked-list":
          transformedIcon = "tasks";
          break;
        default:
          transformedIcon = icon;
      }
      return React.createElement("i", { className: "fas fa-" + transformedIcon, "aria-hidden": "true" });
    };
    exports.MdeFontAwesomeIcon = MdeFontAwesomeIcon;
  }
});

// node_modules/react-mde/lib/js/components/Preview.js
var require_Preview = __commonJS({
  "node_modules/react-mde/lib/js/components/Preview.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Preview = void 0;
    var React = require_react();
    var ClassNames_1 = require_ClassNames();
    var Preview = (
      /** @class */
      function(_super) {
        __extends(Preview2, _super);
        function Preview2(props) {
          var _this = _super.call(this, props) || this;
          _this.state = {
            loading: true
          };
          return _this;
        }
        Preview2.prototype.componentDidMount = function() {
          this.generatePreview();
        };
        Preview2.prototype.componentDidUpdate = function(prevProps, prevState) {
          if (this.props.markdown !== prevProps.markdown) {
            this.generatePreview();
          }
        };
        Preview2.prototype.generatePreview = function() {
          var _this = this;
          var _a = this.props, markdown = _a.markdown, generateMarkdownPreview = _a.generateMarkdownPreview;
          generateMarkdownPreview(markdown).then(function(preview) {
            _this.setState({
              preview,
              loading: false
            });
          });
        };
        Preview2.prototype.render = function() {
          var _a = this.props, classes = _a.classes, minHeight = _a.minHeight, loadingPreview = _a.loadingPreview, refObject = _a.refObject, heightUnits = _a.heightUnits;
          var _b = this.state, preview = _b.preview, loading = _b.loading;
          var finalHtml = loading ? loadingPreview : preview;
          var content;
          if (typeof finalHtml === "string") {
            content = React.createElement("div", { className: "mde-preview-content", dangerouslySetInnerHTML: { __html: finalHtml || "<p>&nbsp;</p>" }, ref: refObject });
          } else {
            content = React.createElement("div", { className: "mde-preview-content" }, finalHtml);
          }
          var minHeightVal = minHeight && heightUnits ? minHeight + 10 + heightUnits : minHeight + 10;
          return React.createElement("div", { className: ClassNames_1.classNames("mde-preview", classes, { loading }), style: { minHeight: minHeightVal }, "data-testid": "mde-preview" }, content);
        };
        return Preview2;
      }(React.Component)
    );
    exports.Preview = Preview;
  }
});

// node_modules/react-mde/lib/js/util/TextAreaCaretPosition.js
var require_TextAreaCaretPosition = __commonJS({
  "node_modules/react-mde/lib/js/util/TextAreaCaretPosition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCaretCoordinates = void 0;
    var properties = [
      "direction",
      "boxSizing",
      "width",
      "height",
      "overflowX",
      "overflowY",
      "borderTopWidth",
      "borderRightWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "borderStyle",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      // https://developer.mozilla.org/en-US/docs/Web/CSS/font
      "fontStyle",
      "fontVariant",
      "fontWeight",
      "fontStretch",
      "fontSize",
      "fontSizeAdjust",
      "lineHeight",
      "fontFamily",
      "textAlign",
      "textTransform",
      "textIndent",
      "textDecoration",
      "letterSpacing",
      "wordSpacing",
      "tabSize",
      "MozTabSize"
    ];
    var isBrowser = typeof window !== "undefined";
    var isFirefox = isBrowser && window.mozInnerScreenX != null;
    function getCaretCoordinates(element, append) {
      if (!isBrowser) {
        throw new Error("getCaretCoordinates should only be called in a browser");
      }
      var div = document.createElement("div");
      div.id = "input-textarea-caret-position-mirror-div";
      document.body.appendChild(div);
      var style = div.style;
      var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle;
      style.whiteSpace = "pre-wrap";
      style.wordWrap = "break-word";
      style.position = "absolute";
      style.visibility = "hidden";
      properties.forEach(function(prop) {
        style[prop] = computed[prop];
      });
      if (isFirefox) {
        if (element.scrollHeight > parseInt(computed.height))
          style.overflowY = "scroll";
      } else {
        style.overflow = "hidden";
      }
      div.textContent = element.value.substring(0, element.selectionStart);
      if (append) {
        div.textContent += append;
      }
      var span = document.createElement("span");
      span.textContent = element.value.substring(element.selectionEnd) || ".";
      div.appendChild(span);
      var coordinates = {
        top: span.offsetTop + parseInt(computed["borderTopWidth"]),
        left: span.offsetLeft + parseInt(computed["borderLeftWidth"]),
        lineHeight: parseInt(computed["lineHeight"])
      };
      document.body.removeChild(div);
      return coordinates;
    }
    exports.getCaretCoordinates = getCaretCoordinates;
  }
});

// node_modules/react-mde/lib/js/util/InsertTextAtPosition.js
var require_InsertTextAtPosition = __commonJS({
  "node_modules/react-mde/lib/js/util/InsertTextAtPosition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.insertText = void 0;
    function insertText(input, text) {
      input.focus();
      if (document.selection) {
        var ieRange = document.selection.createRange();
        ieRange.text = text;
        ieRange.collapse(
          false
          /* to the end */
        );
        ieRange.select();
        return;
      }
      var isSuccess = document.execCommand("insertText", false, text);
      if (!isSuccess) {
        var start = input.selectionStart;
        var end = input.selectionEnd;
        if (typeof input.setRangeText === "function") {
          input.setRangeText(text);
        } else {
          if (canManipulateViaTextNodes(input)) {
            var textNode = document.createTextNode(text);
            var node = input.firstChild;
            if (!node) {
              input.appendChild(textNode);
            } else {
              var offset = 0;
              var startNode = null;
              var endNode = null;
              var range = document.createRange();
              while (node && (startNode === null || endNode === null)) {
                var nodeLength = node.nodeValue.length;
                if (start >= offset && start <= offset + nodeLength) {
                  range.setStart(startNode = node, start - offset);
                }
                if (end >= offset && end <= offset + nodeLength) {
                  range.setEnd(endNode = node, end - offset);
                }
                offset += nodeLength;
                node = node.nextSibling;
              }
              if (start !== end) {
                range.deleteContents();
              }
              range.insertNode(textNode);
            }
          } else {
            var value = input.value;
            input.value = value.slice(0, start) + text + value.slice(end);
          }
        }
        input.setSelectionRange(start + text.length, start + text.length);
        var e = document.createEvent("UIEvent");
        e.initEvent("input", true, false);
        input.dispatchEvent(e);
      }
    }
    exports.insertText = insertText;
    function canManipulateViaTextNodes(input) {
      if (input.nodeName !== "TEXTAREA") {
        return false;
      }
      var browserSupportsTextareaTextNodes;
      if (typeof browserSupportsTextareaTextNodes === "undefined") {
        var textarea = document.createElement("textarea");
        textarea.value = "1";
        browserSupportsTextareaTextNodes = !!textarea.firstChild;
      }
      return browserSupportsTextareaTextNodes;
    }
  }
});

// node_modules/react-mde/lib/js/util/Math.js
var require_Math = __commonJS({
  "node_modules/react-mde/lib/js/util/Math.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mod = void 0;
    function mod(n, m) {
      return (n % m + m) % m;
    }
    exports.mod = mod;
  }
});

// node_modules/react-mde/lib/js/components/SuggestionsDropdown.js
var require_SuggestionsDropdown = __commonJS({
  "node_modules/react-mde/lib/js/components/SuggestionsDropdown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SuggestionsDropdown = void 0;
    var React = require_react();
    var ClassNames_1 = require_ClassNames();
    var SuggestionsDropdown = function(_a) {
      var classes = _a.classes, suggestions = _a.suggestions, caret = _a.caret, onSuggestionSelected = _a.onSuggestionSelected, suggestionsAutoplace = _a.suggestionsAutoplace, focusIndex = _a.focusIndex, textAreaRef = _a.textAreaRef;
      var handleSuggestionClick = function(event) {
        event.preventDefault();
        var index = parseInt(event.currentTarget.attributes["data-index"].value);
        onSuggestionSelected(index);
      };
      var handleMouseDown = function(event) {
        return event.preventDefault();
      };
      var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      var left = caret.left - textAreaRef.current.scrollLeft;
      var top = caret.top - textAreaRef.current.scrollTop;
      var style = {};
      if (suggestionsAutoplace && top + textAreaRef.current.getBoundingClientRect().top > vh / 2)
        style.bottom = textAreaRef.current.offsetHeight - top;
      else
        style.top = top;
      if (suggestionsAutoplace && left + textAreaRef.current.getBoundingClientRect().left > vw / 2)
        style.right = textAreaRef.current.offsetWidth - left;
      else
        style.left = left;
      return React.createElement("ul", { className: ClassNames_1.classNames("mde-suggestions", classes), style }, suggestions.map(function(s, i) {
        return React.createElement("li", { onClick: handleSuggestionClick, onMouseDown: handleMouseDown, key: i, "aria-selected": focusIndex === i ? "true" : "false", "data-index": "" + i }, s.preview);
      }));
    };
    exports.SuggestionsDropdown = SuggestionsDropdown;
  }
});

// node_modules/react-mde/lib/js/components/TextArea.js
var require_TextArea = __commonJS({
  "node_modules/react-mde/lib/js/components/TextArea.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextArea = void 0;
    var React = require_react();
    var ClassNames_1 = require_ClassNames();
    var TextAreaCaretPosition_1 = require_TextAreaCaretPosition();
    var InsertTextAtPosition_1 = require_InsertTextAtPosition();
    var Math_1 = require_Math();
    var SuggestionsDropdown_1 = require_SuggestionsDropdown();
    var TextArea = (
      /** @class */
      function(_super) {
        __extends(TextArea2, _super);
        function TextArea2(props) {
          var _this = _super.call(this, props) || this;
          _this.currentLoadSuggestionsPromise = Promise.resolve(void 0);
          _this.suggestionsPromiseIndex = 0;
          _this.getTextArea = function() {
            return _this.props.refObject.current;
          };
          _this.handleOnChange = function(event) {
            var onChange = _this.props.onChange;
            onChange(event.target.value);
          };
          _this.handleBlur = function() {
            var mention = _this.state.mention;
            if (mention) {
              _this.setState({ mention: { status: "inactive", suggestions: [] } });
            }
          };
          _this.startLoadingSuggestions = function(text) {
            var promiseIndex = ++_this.suggestionsPromiseIndex;
            var loadSuggestions = _this.props.loadSuggestions;
            _this.currentLoadSuggestionsPromise = _this.currentLoadSuggestionsPromise.then(function() {
              return loadSuggestions(text, _this.state.mention.triggeredBy);
            }).then(function(suggestions) {
              if (_this.state.mention.status === "inactive") {
                return;
              } else if (_this.suggestionsPromiseIndex === promiseIndex) {
                if (!suggestions || !suggestions.length) {
                  _this.setState({
                    mention: {
                      status: "inactive",
                      suggestions: []
                    }
                  });
                } else {
                  _this.setState({
                    mention: __assign(__assign({}, _this.state.mention), { status: "active", suggestions, focusIndex: 0 })
                  });
                }
                _this.suggestionsPromiseIndex = 0;
              }
              return Promise.resolve();
            });
          };
          _this.loadEmptySuggestion = function(target, key) {
            var caret = TextAreaCaretPosition_1.getCaretCoordinates(target, key);
            _this.startLoadingSuggestions("");
            _this.setState({
              mention: {
                status: "loading",
                startPosition: target.selectionStart + 1,
                caret,
                suggestions: [],
                triggeredBy: key
              }
            });
          };
          _this.handleSuggestionSelected = function(index) {
            var mention = _this.state.mention;
            _this.getTextArea().selectionStart = mention.startPosition - 1;
            var textForInsert = _this.props.value.substr(_this.getTextArea().selectionStart, _this.getTextArea().selectionEnd - _this.getTextArea().selectionStart);
            InsertTextAtPosition_1.insertText(_this.getTextArea(), mention.suggestions[index].value + " ");
            _this.setState({
              mention: {
                status: "inactive",
                suggestions: []
              }
            });
          };
          _this.handleKeyDown = function(event) {
            if (_this.props.onPossibleKeyCommand) {
              var handled = _this.props.onPossibleKeyCommand(event);
              if (handled) {
                event.preventDefault();
                _this.suggestionsPromiseIndex = 0;
                _this.setState({
                  mention: {
                    status: "inactive",
                    suggestions: []
                  }
                });
                return;
              }
            }
            if (!_this.suggestionsEnabled()) {
              return;
            }
            var key = event.key, shiftKey = event.shiftKey, currentTarget = event.currentTarget;
            var selectionStart = currentTarget.selectionStart;
            var mention = _this.state.mention;
            switch (mention.status) {
              case "loading":
              case "active":
                if (key === "Escape" || key === "Backspace" && selectionStart <= _this.state.mention.startPosition) {
                  _this.suggestionsPromiseIndex = 0;
                  _this.setState({
                    mention: {
                      status: "inactive",
                      suggestions: []
                    }
                  });
                } else if (mention.status === "active" && (key === "ArrowUp" || key === "ArrowDown") && !shiftKey) {
                  event.preventDefault();
                  var focusDelta = key === "ArrowUp" ? -1 : 1;
                  _this.setState({
                    mention: __assign(__assign({}, mention), { focusIndex: Math_1.mod(mention.focusIndex + focusDelta, mention.suggestions.length) })
                  });
                } else if (key === "Enter" && mention.status === "active" && mention.suggestions.length) {
                  event.preventDefault();
                  _this.handleSuggestionSelected(mention.focusIndex);
                }
                break;
              default:
            }
          };
          _this.handleKeyUp = function(event) {
            var key = event.key;
            var mention = _this.state.mention;
            var _a = _this.props, suggestionTriggerCharacters = _a.suggestionTriggerCharacters, value = _a.value;
            switch (mention.status) {
              case "loading":
              case "active":
                if (key === "Backspace") {
                  var searchText = value.substr(mention.startPosition, _this.getTextArea().selectionStart - mention.startPosition);
                  _this.startLoadingSuggestions(searchText);
                  if (mention.status !== "loading") {
                    _this.setState({
                      mention: __assign(__assign({}, _this.state.mention), { status: "loading" })
                    });
                  }
                }
                break;
              case "inactive":
                if (key === "Backspace") {
                  var prevChar = value.charAt(_this.getTextArea().selectionStart - 1);
                  var isAtMention = suggestionTriggerCharacters.includes(value.charAt(_this.getTextArea().selectionStart - 1));
                  if (isAtMention) {
                    _this.loadEmptySuggestion(event.currentTarget, prevChar);
                  }
                }
                break;
              default:
            }
          };
          _this.handleKeyPress = function(event) {
            var _a = _this.props, suggestionTriggerCharacters = _a.suggestionTriggerCharacters, value = _a.value;
            var mention = _this.state.mention;
            var key = event.key;
            switch (mention.status) {
              case "loading":
              case "active":
                if (key === " ") {
                  _this.setState({
                    mention: __assign(__assign({}, _this.state.mention), { status: "inactive" })
                  });
                  return;
                }
                var searchText = value.substr(mention.startPosition, _this.getTextArea().selectionStart - mention.startPosition) + key;
                _this.startLoadingSuggestions(searchText);
                if (mention.status !== "loading") {
                  _this.setState({
                    mention: __assign(__assign({}, _this.state.mention), { status: "loading" })
                  });
                }
                break;
              case "inactive":
                if (suggestionTriggerCharacters.indexOf(event.key) === -1 || !/\s|\(|\[|^.{0}$/.test(value.charAt(_this.getTextArea().selectionStart - 1))) {
                  return;
                }
                _this.loadEmptySuggestion(event.currentTarget, event.key);
                break;
            }
          };
          _this.state = { mention: { status: "inactive", suggestions: [] } };
          return _this;
        }
        TextArea2.prototype.suggestionsEnabled = function() {
          return this.props.suggestionTriggerCharacters && this.props.suggestionTriggerCharacters.length && this.props.loadSuggestions;
        };
        TextArea2.prototype.render = function() {
          var _this = this;
          var _a = this.props, classes = _a.classes, readOnly = _a.readOnly, textAreaProps = _a.textAreaProps, height = _a.height, heightUnits = _a.heightUnits, value = _a.value, suggestionTriggerCharacters = _a.suggestionTriggerCharacters, loadSuggestions = _a.loadSuggestions, suggestionsDropdownClasses = _a.suggestionsDropdownClasses, textAreaComponent = _a.textAreaComponent, onPaste = _a.onPaste, onDrop = _a.onDrop;
          var suggestionsEnabled = suggestionTriggerCharacters && suggestionTriggerCharacters.length && loadSuggestions;
          var mention = this.state.mention;
          var TextAreaComponent = textAreaComponent || "textarea";
          var heightVal = height && heightUnits ? height + heightUnits : height;
          return React.createElement(
            "div",
            { className: "mde-textarea-wrapper" },
            React.createElement(TextAreaComponent, __assign({ className: ClassNames_1.classNames("mde-text", classes), style: { height: heightVal }, ref: this.props.refObject, readOnly, value, "data-testid": "text-area" }, textAreaProps, { onChange: function(event) {
              var _a2;
              (_a2 = textAreaProps === null || textAreaProps === void 0 ? void 0 : textAreaProps.onChange) === null || _a2 === void 0 ? void 0 : _a2.call(textAreaProps, event);
              _this.handleOnChange(event);
            }, onBlur: function(event) {
              var _a2;
              (_a2 = textAreaProps === null || textAreaProps === void 0 ? void 0 : textAreaProps.onBlur) === null || _a2 === void 0 ? void 0 : _a2.call(textAreaProps, event);
              if (suggestionsEnabled) {
                _this.handleBlur();
              }
            }, onKeyDown: function(event) {
              var _a2;
              (_a2 = textAreaProps === null || textAreaProps === void 0 ? void 0 : textAreaProps.onKeyDown) === null || _a2 === void 0 ? void 0 : _a2.call(textAreaProps, event);
              _this.handleKeyDown(event);
            }, onKeyUp: function(event) {
              var _a2;
              (_a2 = textAreaProps === null || textAreaProps === void 0 ? void 0 : textAreaProps.onKeyUp) === null || _a2 === void 0 ? void 0 : _a2.call(textAreaProps, event);
              if (suggestionsEnabled) {
                _this.handleKeyUp(event);
              }
            }, onKeyPress: function(event) {
              var _a2;
              (_a2 = textAreaProps === null || textAreaProps === void 0 ? void 0 : textAreaProps.onKeyPress) === null || _a2 === void 0 ? void 0 : _a2.call(textAreaProps, event);
              if (suggestionsEnabled) {
                _this.handleKeyPress(event);
              }
            }, onPaste: function(event) {
              var _a2;
              (_a2 = textAreaProps === null || textAreaProps === void 0 ? void 0 : textAreaProps.onPaste) === null || _a2 === void 0 ? void 0 : _a2.call(textAreaProps, event);
              onPaste(event);
            }, onDragOver: function(event) {
              event.preventDefault();
              event.stopPropagation();
            }, onDrop: function(event) {
              var _a2;
              (_a2 = textAreaProps === null || textAreaProps === void 0 ? void 0 : textAreaProps.onDrop) === null || _a2 === void 0 ? void 0 : _a2.call(textAreaProps, event);
              onDrop(event);
              event.preventDefault();
            } })),
            mention.status === "active" && mention.suggestions.length && React.createElement(SuggestionsDropdown_1.SuggestionsDropdown, { classes: suggestionsDropdownClasses, caret: mention.caret, suggestions: mention.suggestions, onSuggestionSelected: this.handleSuggestionSelected, suggestionsAutoplace: this.props.suggestionsAutoplace, focusIndex: mention.focusIndex, textAreaRef: this.props.refObject })
          );
        };
        return TextArea2;
      }(React.Component)
    );
    exports.TextArea = TextArea;
  }
});

// node_modules/react-mde/lib/js/components/Toolbar.js
var require_Toolbar = __commonJS({
  "node_modules/react-mde/lib/js/components/Toolbar.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Toolbar = void 0;
    var React = require_react();
    var ClassNames_1 = require_ClassNames();
    var ToolbarButtonGroup_1 = require_ToolbarButtonGroup();
    var ToolbarButton_1 = require_ToolbarButton();
    var Toolbar = (
      /** @class */
      function(_super) {
        __extends(Toolbar2, _super);
        function Toolbar2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.handleTabChange = function(tab) {
            var onTabChange = _this.props.onTabChange;
            onTabChange(tab);
          };
          return _this;
        }
        Toolbar2.prototype.render = function() {
          var _this = this;
          var l18n = this.props.l18n;
          var _a = this.props, classes = _a.classes, children = _a.children, buttons = _a.buttons, onCommand = _a.onCommand, readOnly = _a.readOnly, disablePreview = _a.disablePreview, writeButtonProps = _a.writeButtonProps, previewButtonProps = _a.previewButtonProps, buttonProps = _a.buttonProps;
          if ((!buttons || buttons.length === 0) && !children) {
            return null;
          }
          var writePreviewTabs = React.createElement(
            "div",
            { className: "mde-tabs" },
            React.createElement("button", __assign({ type: "button", className: ClassNames_1.classNames({ selected: this.props.tab === "write" }), onClick: function() {
              return _this.handleTabChange("write");
            } }, writeButtonProps), l18n.write),
            React.createElement("button", __assign({ type: "button", className: ClassNames_1.classNames({ selected: this.props.tab === "preview" }), onClick: function() {
              return _this.handleTabChange("preview");
            } }, previewButtonProps), l18n.preview)
          );
          return React.createElement(
            "div",
            { className: ClassNames_1.classNames("mde-header", classes) },
            !disablePreview && writePreviewTabs,
            buttons.map(function(commandGroup, i) {
              return React.createElement(ToolbarButtonGroup_1.ToolbarButtonGroup, { key: i, hidden: _this.props.tab === "preview" }, commandGroup.map(function(c, j) {
                return React.createElement(ToolbarButton_1.ToolbarButton, { key: j, name: c.commandName, buttonContent: c.buttonContent, buttonProps: __assign(__assign({}, buttonProps || {}), c.buttonProps), onClick: function() {
                  return onCommand(c.commandName);
                }, readOnly, buttonComponentClass: c.buttonComponentClass });
              }));
            })
          );
        };
        return Toolbar2;
      }(React.Component)
    );
    exports.Toolbar = Toolbar;
  }
});

// node_modules/react-mde/lib/js/commands/default-commands/headerCommand.js
var require_headerCommand = __commonJS({
  "node_modules/react-mde/lib/js/commands/default-commands/headerCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headerCommand = void 0;
    var MarkdownUtil_1 = require_MarkdownUtil();
    function setHeader(initialState, api, prefix) {
      var newSelectionRange = MarkdownUtil_1.selectWord({
        text: initialState.text,
        selection: initialState.selection
      });
      var state1 = api.setSelectionRange(newSelectionRange);
      var state2 = api.replaceSelection("" + prefix + state1.selectedText);
      api.setSelectionRange({
        start: state2.selection.end - state1.selectedText.length,
        end: state2.selection.end
      });
    }
    exports.headerCommand = {
      buttonProps: { "aria-label": "Add header" },
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        setHeader(initialState, textApi, "### ");
      }
    };
  }
});

// node_modules/react-mde/lib/js/commands/default-commands/boldCommand.js
var require_boldCommand = __commonJS({
  "node_modules/react-mde/lib/js/commands/default-commands/boldCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boldCommand = void 0;
    var MarkdownUtil_1 = require_MarkdownUtil();
    exports.boldCommand = {
      buttonProps: { "aria-label": "Add bold text" },
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        var newSelectionRange = MarkdownUtil_1.selectWord({
          text: initialState.text,
          selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        var state2 = textApi.replaceSelection("**" + state1.selectedText + "**");
        textApi.setSelectionRange({
          start: state2.selection.end - 2 - state1.selectedText.length,
          end: state2.selection.end - 2
        });
      },
      handleKeyCommand: function(e) {
        return (e.ctrlKey || e.metaKey) && e.key == "b";
      }
    };
  }
});

// node_modules/react-mde/lib/js/commands/default-commands/italicCommand.js
var require_italicCommand = __commonJS({
  "node_modules/react-mde/lib/js/commands/default-commands/italicCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.italicCommand = void 0;
    var MarkdownUtil_1 = require_MarkdownUtil();
    exports.italicCommand = {
      buttonProps: { "aria-label": "Add italic text" },
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        var newSelectionRange = MarkdownUtil_1.selectWord({
          text: initialState.text,
          selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        var state2 = textApi.replaceSelection("*" + state1.selectedText + "*");
        textApi.setSelectionRange({
          start: state2.selection.end - 1 - state1.selectedText.length,
          end: state2.selection.end - 1
        });
      },
      handleKeyCommand: function(e) {
        return (e.ctrlKey || e.metaKey) && e.key == "i";
      }
    };
  }
});

// node_modules/react-mde/lib/js/commands/default-commands/strikeThroughCommand.js
var require_strikeThroughCommand = __commonJS({
  "node_modules/react-mde/lib/js/commands/default-commands/strikeThroughCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.strikeThroughCommand = void 0;
    var MarkdownUtil_1 = require_MarkdownUtil();
    exports.strikeThroughCommand = {
      buttonProps: { "aria-label": "Add strikethrough text" },
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        var newSelectionRange = MarkdownUtil_1.selectWord({
          text: initialState.text,
          selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        var state2 = textApi.replaceSelection("~~" + state1.selectedText + "~~");
        textApi.setSelectionRange({
          start: state2.selection.end - 2 - state1.selectedText.length,
          end: state2.selection.end - 2
        });
      }
    };
  }
});

// node_modules/react-mde/lib/js/commands/default-commands/linkCommand.js
var require_linkCommand = __commonJS({
  "node_modules/react-mde/lib/js/commands/default-commands/linkCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.linkCommand = void 0;
    var MarkdownUtil_1 = require_MarkdownUtil();
    exports.linkCommand = {
      buttonProps: { "aria-label": "Add a link" },
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        var newSelectionRange = MarkdownUtil_1.selectWord({
          text: initialState.text,
          selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        var state2 = textApi.replaceSelection("[" + state1.selectedText + "](url)");
        textApi.setSelectionRange({
          start: state2.selection.end - 6 - state1.selectedText.length,
          end: state2.selection.end - 6
        });
      },
      handleKeyCommand: function(e) {
        return (e.ctrlKey || e.metaKey) && e.key == "k";
      }
    };
  }
});

// node_modules/react-mde/lib/js/commands/default-commands/quoteCommand.js
var require_quoteCommand = __commonJS({
  "node_modules/react-mde/lib/js/commands/default-commands/quoteCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.quoteCommand = void 0;
    var MarkdownUtil_1 = require_MarkdownUtil();
    exports.quoteCommand = {
      buttonProps: { "aria-label": "Insert a quote" },
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        var newSelectionRange = MarkdownUtil_1.selectWord({
          text: initialState.text,
          selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        var breaksBeforeCount = MarkdownUtil_1.getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
        var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
        var breaksAfterCount = MarkdownUtil_1.getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
        var breaksAfter = Array(breaksAfterCount + 1).join("\n");
        textApi.replaceSelection(breaksBefore + "> " + state1.selectedText + breaksAfter);
        var selectionStart = state1.selection.start + breaksBeforeCount + 2;
        var selectionEnd = selectionStart + state1.selectedText.length;
        textApi.setSelectionRange({
          start: selectionStart,
          end: selectionEnd
        });
      }
    };
  }
});

// node_modules/react-mde/lib/js/commands/default-commands/codeCommand.js
var require_codeCommand = __commonJS({
  "node_modules/react-mde/lib/js/commands/default-commands/codeCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.codeCommand = void 0;
    var MarkdownUtil_1 = require_MarkdownUtil();
    exports.codeCommand = {
      buttonProps: { "aria-label": "Insert code" },
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        var newSelectionRange = MarkdownUtil_1.selectWord({
          text: initialState.text,
          selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        if (state1.selectedText.indexOf("\n") === -1) {
          textApi.replaceSelection("`" + state1.selectedText + "`");
          var selectionStart_1 = state1.selection.start + 1;
          var selectionEnd_1 = selectionStart_1 + state1.selectedText.length;
          textApi.setSelectionRange({
            start: selectionStart_1,
            end: selectionEnd_1
          });
          return;
        }
        var breaksBeforeCount = MarkdownUtil_1.getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
        var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
        var breaksAfterCount = MarkdownUtil_1.getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
        var breaksAfter = Array(breaksAfterCount + 1).join("\n");
        textApi.replaceSelection(breaksBefore + "```\n" + state1.selectedText + "\n```" + breaksAfter);
        var selectionStart = state1.selection.start + breaksBeforeCount + 4;
        var selectionEnd = selectionStart + state1.selectedText.length;
        textApi.setSelectionRange({
          start: selectionStart,
          end: selectionEnd
        });
      }
    };
  }
});

// node_modules/react-mde/lib/js/commands/default-commands/listCommands.js
var require_listCommands = __commonJS({
  "node_modules/react-mde/lib/js/commands/default-commands/listCommands.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkedListCommand = exports.orderedListCommand = exports.unorderedListCommand = exports.makeList = exports.insertBeforeEachLine = void 0;
    var MarkdownUtil_1 = require_MarkdownUtil();
    function insertBeforeEachLine(selectedText, insertBefore) {
      var lines = selectedText.split(/\n/);
      var insertionLength = 0;
      var modifiedText = lines.map(function(item, index) {
        if (typeof insertBefore === "string") {
          insertionLength += insertBefore.length;
          return insertBefore + item;
        } else if (typeof insertBefore === "function") {
          var insertionResult = insertBefore(item, index);
          insertionLength += insertionResult.length;
          return insertBefore(item, index) + item;
        }
        throw Error("insertion is expected to be either a string or a function");
      }).join("\n");
      return { modifiedText, insertionLength };
    }
    exports.insertBeforeEachLine = insertBeforeEachLine;
    var makeList = function(state0, api, insertBefore) {
      var newSelectionRange = MarkdownUtil_1.selectWord({
        text: state0.text,
        selection: state0.selection
      });
      var state1 = api.setSelectionRange(newSelectionRange);
      var breaksBeforeCount = MarkdownUtil_1.getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
      var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
      var breaksAfterCount = MarkdownUtil_1.getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
      var breaksAfter = Array(breaksAfterCount + 1).join("\n");
      var modifiedText = insertBeforeEachLine(state1.selectedText, insertBefore);
      api.replaceSelection("" + breaksBefore + modifiedText.modifiedText + breaksAfter);
      var oneLinerOffset = state1.selectedText.indexOf("\n") === -1 ? modifiedText.insertionLength : 0;
      var selectionStart = state1.selection.start + breaksBeforeCount + oneLinerOffset;
      var selectionEnd = selectionStart + modifiedText.modifiedText.length - oneLinerOffset;
      api.setSelectionRange({
        start: selectionStart,
        end: selectionEnd
      });
    };
    exports.makeList = makeList;
    exports.unorderedListCommand = {
      buttonProps: { "aria-label": "Add unordered list" },
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        exports.makeList(initialState, textApi, "- ");
      }
    };
    exports.orderedListCommand = {
      buttonProps: { "aria-label": "Add ordered list" },
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        exports.makeList(initialState, textApi, function(item, index) {
          return index + 1 + ". ";
        });
      }
    };
    exports.checkedListCommand = {
      buttonProps: { "aria-label": "Add checked list" },
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        exports.makeList(initialState, textApi, function(item, index) {
          return "- [ ] ";
        });
      }
    };
  }
});

// node_modules/react-mde/lib/js/commands/default-commands/imageCommand.js
var require_imageCommand = __commonJS({
  "node_modules/react-mde/lib/js/commands/default-commands/imageCommand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.imageCommand = void 0;
    var MarkdownUtil_1 = require_MarkdownUtil();
    exports.imageCommand = {
      buttonProps: { "aria-label": "Add image" },
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        var state1 = textApi.setSelectionRange(MarkdownUtil_1.selectWord({
          text: initialState.text,
          selection: initialState.selection
        }));
        var imageTemplate = state1.selectedText || "https://example.com/your-image.png";
        textApi.replaceSelection("![](" + imageTemplate + ")");
        textApi.setSelectionRange({
          start: state1.selection.start + 4,
          end: state1.selection.start + 4 + imageTemplate.length
        });
      }
    };
  }
});

// node_modules/react-mde/lib/js/util/files.js
var require_files = __commonJS({
  "node_modules/react-mde/lib/js/util/files.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readFileAsync = void 0;
    function readFileAsync(file) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function() {
              if (typeof reader.result === "string") {
                throw new Error("reader.result is expected to be an ArrayBuffer");
              }
              resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
          })];
        });
      });
    }
    exports.readFileAsync = readFileAsync;
  }
});

// node_modules/react-mde/lib/js/commands/default-commands/save-image-command.js
var require_save_image_command = __commonJS({
  "node_modules/react-mde/lib/js/commands/default-commands/save-image-command.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.saveImageCommand = void 0;
    var files_1 = require_files();
    var MarkdownUtil_1 = require_MarkdownUtil();
    function dataTransferToArray(items) {
      var result = [];
      for (var index in items) {
        var item = items[index];
        if (item.kind === "file") {
          result.push(item.getAsFile());
        }
      }
      return result;
    }
    function fileListToArray(list) {
      var result = [];
      for (var i = 0; i < list.length; i++) {
        result.push(list[0]);
      }
      return result;
    }
    function filterItems(items, _a) {
      var multiple = _a.multiple, accept = _a.accept;
      var filteredItems = items;
      if (!multiple) {
        filteredItems = filteredItems.slice(0, 1);
      }
      if (accept) {
        var acceptedTypes = accept.split(",");
        var fileExtensions_1 = new Set(acceptedTypes.filter(function(t) {
          return /^\.\w+/.test(t);
        }).map(function(t) {
          return t.split(".")[1];
        }));
        var mimeTypes_1 = new Set(acceptedTypes.filter(function(t) {
          return /^[-\w.]+\/[-\w.]+$/.test(t);
        }));
        var anyTypes_1 = new Set(acceptedTypes.filter(function(t) {
          return /(audio|video|image)\/\*/.test(t);
        }).map(function(t) {
          return t.split("/")[0];
        }));
        filteredItems = filteredItems.filter(function(f) {
          return fileExtensions_1.has(f.name.split(".")[1]) || mimeTypes_1.has(f.type) || anyTypes_1.has(f.type.split("/")[0]);
        });
      }
      return filteredItems;
    }
    exports.saveImageCommand = {
      execute: function(_a) {
        var initialState = _a.initialState, textApi = _a.textApi, context = _a.context, l18n = _a.l18n;
        return __awaiter(this, void 0, void 0, function() {
          var pasteContext, event, _b, saveImage, multiple, accept, items, filteredItems, _c, _d, _i, index, initialState_1, breaksBeforeCount, breaksBefore, placeHolder, blob, blobContents, savingImage, imageUrl, newState, uploadingText, realImageMarkdown, selectionDelta;
          return __generator(this, function(_e) {
            switch (_e.label) {
              case 0:
                if (!context) {
                  throw new Error("wrong context");
                }
                pasteContext = context;
                event = pasteContext.event, _b = pasteContext.pasteOptions, saveImage = _b.saveImage, multiple = _b.multiple, accept = _b.accept;
                items = isPasteEvent(context) ? dataTransferToArray(event.clipboardData.items) : isDragEvent(context) ? dataTransferToArray(event.dataTransfer.items) : fileListToArray(event.target.files);
                filteredItems = filterItems(items, { multiple, accept });
                _c = [];
                for (_d in filteredItems)
                  _c.push(_d);
                _i = 0;
                _e.label = 1;
              case 1:
                if (!(_i < _c.length))
                  return [3, 5];
                index = _c[_i];
                initialState_1 = textApi.getState();
                breaksBeforeCount = MarkdownUtil_1.getBreaksNeededForEmptyLineBefore(initialState_1.text, initialState_1.selection.start);
                breaksBefore = Array(breaksBeforeCount + 1).join("\n");
                placeHolder = breaksBefore + "![" + l18n.uploadingImage + "]()";
                textApi.replaceSelection(placeHolder);
                blob = items[index];
                return [4, files_1.readFileAsync(blob)];
              case 2:
                blobContents = _e.sent();
                savingImage = saveImage(blobContents, blob);
                return [4, savingImage.next()];
              case 3:
                imageUrl = _e.sent().value;
                newState = textApi.getState();
                uploadingText = newState.text.substr(initialState_1.selection.start, placeHolder.length);
                if (uploadingText === placeHolder) {
                  textApi.setSelectionRange({
                    start: initialState_1.selection.start,
                    end: initialState_1.selection.start + placeHolder.length
                  });
                  realImageMarkdown = imageUrl ? breaksBefore + "![image](" + imageUrl + ")" : "";
                  selectionDelta = realImageMarkdown.length - placeHolder.length;
                  textApi.replaceSelection(realImageMarkdown);
                  textApi.setSelectionRange({
                    start: newState.selection.start + selectionDelta,
                    end: newState.selection.end + selectionDelta
                  });
                }
                _e.label = 4;
              case 4:
                _i++;
                return [3, 1];
              case 5:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
    };
    function isPasteEvent(context) {
      return context.event.clipboardData !== void 0;
    }
    function isDragEvent(context) {
      return context.event.dataTransfer !== void 0;
    }
  }
});

// node_modules/react-mde/lib/js/commands/default-commands/defaults.js
var require_defaults = __commonJS({
  "node_modules/react-mde/lib/js/commands/default-commands/defaults.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDefaultSaveImageCommandName = exports.getDefaultCommandMap = exports.getDefaultToolbarCommands = void 0;
    var headerCommand_1 = require_headerCommand();
    var boldCommand_1 = require_boldCommand();
    var italicCommand_1 = require_italicCommand();
    var strikeThroughCommand_1 = require_strikeThroughCommand();
    var linkCommand_1 = require_linkCommand();
    var quoteCommand_1 = require_quoteCommand();
    var codeCommand_1 = require_codeCommand();
    var listCommands_1 = require_listCommands();
    var imageCommand_1 = require_imageCommand();
    var save_image_command_1 = require_save_image_command();
    function getDefaultToolbarCommands() {
      return [
        ["header", "bold", "italic", "strikethrough"],
        ["link", "quote", "code", "image"],
        ["unordered-list", "ordered-list", "checked-list"]
      ];
    }
    exports.getDefaultToolbarCommands = getDefaultToolbarCommands;
    function getDefaultCommandMap() {
      return {
        header: headerCommand_1.headerCommand,
        bold: boldCommand_1.boldCommand,
        italic: italicCommand_1.italicCommand,
        strikethrough: strikeThroughCommand_1.strikeThroughCommand,
        link: linkCommand_1.linkCommand,
        quote: quoteCommand_1.quoteCommand,
        code: codeCommand_1.codeCommand,
        image: imageCommand_1.imageCommand,
        "unordered-list": listCommands_1.unorderedListCommand,
        "ordered-list": listCommands_1.orderedListCommand,
        "checked-list": listCommands_1.checkedListCommand,
        "save-image": save_image_command_1.saveImageCommand
      };
    }
    exports.getDefaultCommandMap = getDefaultCommandMap;
    function getDefaultSaveImageCommandName() {
      return "save-image";
    }
    exports.getDefaultSaveImageCommandName = getDefaultSaveImageCommandName;
  }
});

// node_modules/react-mde/lib/js/l18n/react-mde.en.js
var require_react_mde_en = __commonJS({
  "node_modules/react-mde/lib/js/l18n/react-mde.en.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.enL18n = void 0;
    exports.enL18n = {
      write: "Write",
      preview: "Preview",
      uploadingImage: "Uploading image...",
      pasteDropSelect: "Attach files by dragging & dropping, selecting or pasting them."
    };
  }
});

// node_modules/react-mde/lib/js/icons/SvgIcon.js
var require_SvgIcon = __commonJS({
  "node_modules/react-mde/lib/js/icons/SvgIcon.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SvgIcon = void 0;
    var React = require_react();
    var checkedListIcon = React.createElement(
      "svg",
      { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "tasks", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
      React.createElement("path", { fill: "currentColor", d: "M208 132h288c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zM64 368c-26.5 0-48.6 21.5-48.6 48s22.1 48 48.6 48 48-21.5 48-48-21.5-48-48-48zm92.5-299l-72.2 72.2-15.6 15.6c-4.7 4.7-12.9 4.7-17.6 0L3.5 109.4c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.3c4.7-4.7 12.3-4.7 17 0l17 16.5c4.6 4.7 4.6 12.3-.1 17zm0 159.6l-72.2 72.2-15.7 15.7c-4.7 4.7-12.9 4.7-17.6 0L3.5 269c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.7c4.7-4.7 12.3-4.7 17 0l17 17c4.6 4.6 4.6 12.2-.1 16.9z" })
    );
    var orderedListIcon = React.createElement(
      "svg",
      { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "list-ol", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
      React.createElement("path", { fill: "currentColor", d: "M3.263 139.527c0-7.477 3.917-11.572 11.573-11.572h15.131V88.078c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.938C32.815 33.602 36.732 32 42.785 32H54.89c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572H14.836c-7.656 0-11.573-4.095-11.573-11.572v-8.902zM2.211 304.591c0-47.278 50.955-56.383 50.955-69.165 0-7.18-5.954-8.755-9.28-8.755-3.153 0-6.479 1.051-9.455 3.852-5.079 4.903-10.507 7.004-16.111 2.451l-8.579-6.829c-5.779-4.553-7.18-9.805-2.803-15.409C13.592 201.981 26.025 192 47.387 192c19.437 0 44.476 10.506 44.476 39.573 0 38.347-46.753 46.402-48.679 56.909h39.049c7.529 0 11.557 4.027 11.557 11.382v8.755c0 7.354-4.028 11.382-11.557 11.382h-67.94c-7.005 0-12.083-4.028-12.083-11.382v-4.028zM5.654 454.61l5.603-9.28c3.853-6.654 9.105-7.004 15.584-3.152 4.903 2.101 9.63 3.152 14.359 3.152 10.155 0 14.358-3.502 14.358-8.23 0-6.654-5.604-9.106-15.934-9.106h-4.728c-5.954 0-9.28-2.101-12.258-7.88l-1.05-1.926c-2.451-4.728-1.226-9.806 2.801-14.884l5.604-7.004c6.829-8.405 12.257-13.483 12.257-13.483v-.35s-4.203 1.051-12.608 1.051H16.685c-7.53 0-11.383-4.028-11.383-11.382v-8.755c0-7.53 3.853-11.382 11.383-11.382h58.484c7.529 0 11.382 4.027 11.382 11.382v3.327c0 5.778-1.401 9.806-5.079 14.183l-17.509 20.137c19.611 5.078 28.716 20.487 28.716 34.845 0 21.363-14.358 44.126-48.503 44.126-16.636 0-28.192-4.728-35.896-9.455-5.779-4.202-6.304-9.805-2.626-15.934zM144 132h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" })
    );
    var unorderedListIcon = React.createElement(
      "svg",
      { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "list-ul", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
      React.createElement("path", { fill: "currentColor", d: "M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" })
    );
    var imageIcon = React.createElement(
      "svg",
      { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "image", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
      React.createElement("path", { fill: "currentColor", d: "M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" })
    );
    var codeIcon = React.createElement(
      "svg",
      { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "code", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", "data-fa-i2svg": "" },
      React.createElement("path", { fill: "currentColor", d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" })
    );
    var quoteIcon = React.createElement(
      "svg",
      { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "quote-right", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
      React.createElement("path", { fill: "currentColor", d: "M512 80v128c0 137.018-63.772 236.324-193.827 271.172-15.225 4.08-30.173-7.437-30.173-23.199v-33.895c0-10.057 6.228-19.133 15.687-22.55C369.684 375.688 408 330.054 408 256h-72c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h128c26.51 0 48 21.49 48 48zM176 32H48C21.49 32 0 53.49 0 80v128c0 26.51 21.49 48 48 48h72c0 74.054-38.316 119.688-104.313 143.528C6.228 402.945 0 412.021 0 422.078v33.895c0 15.762 14.948 27.279 30.173 23.199C160.228 444.324 224 345.018 224 208V80c0-26.51-21.49-48-48-48z" })
    );
    var linkIcon = React.createElement(
      "svg",
      { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "link", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
      React.createElement("path", { fill: "currentColor", d: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" })
    );
    var strikeThroughIcon = React.createElement(
      "svg",
      { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "strikethrough", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
      React.createElement("path", { fill: "currentColor", d: "M496 288H16c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h480c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16zm-214.666 16c27.258 12.937 46.524 28.683 46.524 56.243 0 33.108-28.977 53.676-75.621 53.676-32.325 0-76.874-12.08-76.874-44.271V368c0-8.837-7.164-16-16-16H113.75c-8.836 0-16 7.163-16 16v19.204c0 66.845 77.717 101.82 154.487 101.82 88.578 0 162.013-45.438 162.013-134.424 0-19.815-3.618-36.417-10.143-50.6H281.334zm-30.952-96c-32.422-13.505-56.836-28.946-56.836-59.683 0-33.92 30.901-47.406 64.962-47.406 42.647 0 64.962 16.593 64.962 32.985V136c0 8.837 7.164 16 16 16h45.613c8.836 0 16-7.163 16-16v-30.318c0-52.438-71.725-79.875-142.575-79.875-85.203 0-150.726 40.972-150.726 125.646 0 22.71 4.665 41.176 12.777 56.547h129.823z" })
    );
    var italicIcon = React.createElement(
      "svg",
      { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "italic", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", "data-fa-i2svg": "" },
      React.createElement("path", { fill: "currentColor", d: "M204.758 416h-33.849l62.092-320h40.725a16 16 0 0 0 15.704-12.937l6.242-32C297.599 41.184 290.034 32 279.968 32H120.235a16 16 0 0 0-15.704 12.937l-6.242 32C96.362 86.816 103.927 96 113.993 96h33.846l-62.09 320H46.278a16 16 0 0 0-15.704 12.935l-6.245 32C22.402 470.815 29.967 480 40.034 480h158.479a16 16 0 0 0 15.704-12.935l6.245-32c1.927-9.88-5.638-19.065-15.704-19.065z" })
    );
    var headerIcon = React.createElement(
      "svg",
      { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "heading", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
      React.createElement("path", { fill: "currentColor", d: "M496 80V48c0-8.837-7.163-16-16-16H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.621v128H154.379V96H192c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.275v320H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.621V288H357.62v128H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.275V96H480c8.837 0 16-7.163 16-16z" })
    );
    var boldIcon = React.createElement(
      "svg",
      { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "bold", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", "data-fa-i2svg": "" },
      React.createElement("path", { fill: "currentColor", d: "M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z" })
    );
    var SvgIcon = function(_a) {
      var icon = _a.icon;
      switch (icon) {
        case "header":
          return headerIcon;
        case "bold":
          return boldIcon;
        case "italic":
          return italicIcon;
        case "strikethrough":
          return strikeThroughIcon;
        case "link":
          return linkIcon;
        case "quote":
          return quoteIcon;
        case "code":
          return codeIcon;
        case "image":
          return imageIcon;
        case "unordered-list":
          return unorderedListIcon;
        case "ordered-list":
          return orderedListIcon;
        case "checked-list":
          return checkedListIcon;
        default:
          return null;
      }
    };
    exports.SvgIcon = SvgIcon;
  }
});

// node_modules/react-mde/lib/js/icons/index.js
var require_icons = __commonJS({
  "node_modules/react-mde/lib/js/icons/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_MdeFontAwesomeIcon(), exports);
    __exportStar(require_SvgIcon(), exports);
  }
});

// node_modules/react-mde/lib/js/commands/command-utils.js
var require_command_utils = __commonJS({
  "node_modules/react-mde/lib/js/commands/command-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractKeyActivatedCommands = void 0;
    function extractKeyActivatedCommands(commandMap) {
      var result = [];
      for (var command in commandMap) {
        if (commandMap.hasOwnProperty(command)) {
          if (commandMap[command].handleKeyCommand) {
            result.push(command);
          }
        }
      }
      return result;
    }
    exports.extractKeyActivatedCommands = extractKeyActivatedCommands;
  }
});

// node_modules/react-mde/lib/js/commands/command-orchestrator.js
var require_command_orchestrator = __commonJS({
  "node_modules/react-mde/lib/js/commands/command-orchestrator.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommandOrchestrator = exports.getStateFromTextArea = exports.TextAreaTextApi = void 0;
    var __1 = require_js();
    var InsertTextAtPosition_1 = require_InsertTextAtPosition();
    var command_utils_1 = require_command_utils();
    var defaults_1 = require_defaults();
    var TextAreaTextApi = (
      /** @class */
      function() {
        function TextAreaTextApi2(textAreaRef) {
          this.textAreaRef = textAreaRef;
        }
        TextAreaTextApi2.prototype.replaceSelection = function(text) {
          var textArea = this.textAreaRef.current;
          InsertTextAtPosition_1.insertText(textArea, text);
          return getStateFromTextArea(textArea);
        };
        TextAreaTextApi2.prototype.setSelectionRange = function(selection) {
          var textArea = this.textAreaRef.current;
          textArea.focus();
          textArea.selectionStart = selection.start;
          textArea.selectionEnd = selection.end;
          return getStateFromTextArea(textArea);
        };
        TextAreaTextApi2.prototype.getState = function() {
          var textArea = this.textAreaRef.current;
          return getStateFromTextArea(textArea);
        };
        return TextAreaTextApi2;
      }()
    );
    exports.TextAreaTextApi = TextAreaTextApi;
    function getStateFromTextArea(textArea) {
      return {
        selection: {
          start: textArea.selectionStart,
          end: textArea.selectionEnd
        },
        text: textArea.value,
        selectedText: textArea.value.slice(textArea.selectionStart, textArea.selectionEnd)
      };
    }
    exports.getStateFromTextArea = getStateFromTextArea;
    var CommandOrchestrator = (
      /** @class */
      function() {
        function CommandOrchestrator2(customCommands, textArea, l18n, pasteOptions) {
          var _this = this;
          this.getCommand = function(name) {
            var command = _this.commandMap[name];
            if (!command) {
              throw new Error("Cannot execute command. Command not found: " + name);
            }
            return command;
          };
          this.handlePossibleKeyCommand = function(e) {
            for (var _i = 0, _a = _this.keyActivatedCommands; _i < _a.length; _i++) {
              var commandName = _a[_i];
              if (_this.getCommand(commandName).handleKeyCommand(e)) {
                _this.executeCommand(commandName).then(function(r) {
                });
                return true;
              }
            }
            return false;
          };
          if (pasteOptions && !pasteOptions.saveImage) {
            throw new Error("paste options are incomplete. saveImage are required ");
          }
          this.commandMap = __assign(__assign({}, __1.getDefaultCommandMap()), customCommands || {});
          this.pasteOptions = pasteOptions;
          this.keyActivatedCommands = command_utils_1.extractKeyActivatedCommands(customCommands);
          this.textAreaRef = textArea;
          this.textApi = new TextAreaTextApi(textArea);
          this.l18n = l18n;
        }
        CommandOrchestrator2.prototype.executeCommand = function(commandName, context) {
          return __awaiter(this, void 0, void 0, function() {
            var command, result;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (this.isExecuting) {
                    return [
                      2
                      /*return*/
                    ];
                  }
                  this.isExecuting = true;
                  command = this.commandMap[commandName];
                  result = command.execute({
                    initialState: getStateFromTextArea(this.textAreaRef.current),
                    textApi: this.textApi,
                    l18n: this.l18n,
                    context
                  });
                  return [4, result];
                case 1:
                  _a.sent();
                  this.isExecuting = false;
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        CommandOrchestrator2.prototype.executePasteCommand = function(event) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              if (this.pasteOptions) {
                return [2, this.executeCommand(this.pasteOptions.command || defaults_1.getDefaultSaveImageCommandName(), {
                  pasteOptions: this.pasteOptions,
                  event
                })];
              }
              return [
                2
                /*return*/
              ];
            });
          });
        };
        CommandOrchestrator2.prototype.executeDropCommand = function(event) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              if (this.pasteOptions) {
                return [2, this.executeCommand(this.pasteOptions.command || defaults_1.getDefaultSaveImageCommandName(), {
                  pasteOptions: this.pasteOptions,
                  event
                })];
              }
              return [
                2
                /*return*/
              ];
            });
          });
        };
        CommandOrchestrator2.prototype.executeSelectImageCommand = function(event) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              if (this.pasteOptions) {
                return [2, this.executeCommand(this.pasteOptions.command || defaults_1.getDefaultSaveImageCommandName(), {
                  pasteOptions: this.pasteOptions,
                  event
                })];
              }
              return [
                2
                /*return*/
              ];
            });
          });
        };
        CommandOrchestrator2.prototype.getCommandByName = function(name) {
          return this.commandMap[name];
        };
        return CommandOrchestrator2;
      }()
    );
    exports.CommandOrchestrator = CommandOrchestrator;
  }
});

// node_modules/react-mde/lib/js/components/ReactMde.js
var require_ReactMde = __commonJS({
  "node_modules/react-mde/lib/js/components/ReactMde.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReactMde = void 0;
    var React = require_react();
    var _1 = require_components();
    var defaults_1 = require_defaults();
    var react_mde_en_1 = require_react_mde_en();
    var icons_1 = require_icons();
    var ClassNames_1 = require_ClassNames();
    var command_orchestrator_1 = require_command_orchestrator();
    var pasteOptionDefaults = {
      accept: "image/*",
      multiple: false
    };
    var ReactMde = (
      /** @class */
      function(_super) {
        __extends(ReactMde2, _super);
        function ReactMde2(props) {
          var _a;
          var _this = _super.call(this, props) || this;
          _this.handleTextChange = function(value) {
            var onChange = _this.props.onChange;
            onChange(value);
          };
          _this.handlePaste = function(event) {
            return __awaiter(_this, void 0, void 0, function() {
              var paste;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    paste = this.props.paste;
                    if (!paste || !paste.saveImage) {
                      return [
                        2
                        /*return*/
                      ];
                    }
                    return [4, this.commandOrchestrator.executePasteCommand(event)];
                  case 1:
                    _a2.sent();
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          _this.handleDrop = function(event) {
            return __awaiter(_this, void 0, void 0, function() {
              var paste;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    paste = this.props.paste;
                    if (!paste || !paste.saveImage) {
                      return [
                        2
                        /*return*/
                      ];
                    }
                    return [4, this.commandOrchestrator.executeDropCommand(event)];
                  case 1:
                    _a2.sent();
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          _this.handleImageSelection = function(event) {
            return __awaiter(_this, void 0, void 0, function() {
              var paste;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    paste = this.props.paste;
                    if (!paste || !paste.saveImage) {
                      return [
                        2
                        /*return*/
                      ];
                    }
                    return [4, this.commandOrchestrator.executeSelectImageCommand(event)];
                  case 1:
                    _a2.sent();
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          _this.handleTabChange = function(newTab) {
            var onTabChange = _this.props.onTabChange;
            onTabChange(newTab);
          };
          _this.handleCommand = function(commandName) {
            return __awaiter(_this, void 0, void 0, function() {
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, this.commandOrchestrator.executeCommand(commandName)];
                  case 1:
                    _a2.sent();
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          _this.finalRefs = __assign({}, props.refs || {});
          if (!_this.finalRefs.textarea) {
            _this.finalRefs.textarea = React.createRef();
          }
          if (!_this.finalRefs.preview) {
            _this.finalRefs.preview = React.createRef();
          }
          _this.commandOrchestrator = new command_orchestrator_1.CommandOrchestrator(_this.props.commands, _this.finalRefs.textarea, _this.props.l18n, _this.props.paste ? __assign(__assign({}, pasteOptionDefaults), _this.props.paste) : void 0);
          var minEditorHeight = Math.min(props.maxEditorHeight, props.minEditorHeight);
          _this.state = {
            editorHeight: (_a = props.initialEditorHeight) !== null && _a !== void 0 ? _a : minEditorHeight
          };
          return _this;
        }
        ReactMde2.prototype.render = function() {
          var _this = this;
          var _a, _b;
          var _c = this.props, getIcon = _c.getIcon, toolbarCommands = _c.toolbarCommands, classes = _c.classes, loadingPreview = _c.loadingPreview, readOnly = _c.readOnly, disablePreview = _c.disablePreview, value = _c.value, l18n = _c.l18n, minPreviewHeight = _c.minPreviewHeight, heightUnits = _c.heightUnits, childProps = _c.childProps, selectedTab = _c.selectedTab, generateMarkdownPreview = _c.generateMarkdownPreview, loadSuggestions = _c.loadSuggestions, suggestionTriggerCharacters = _c.suggestionTriggerCharacters, textAreaComponent = _c.textAreaComponent;
          var finalChildProps = childProps || {};
          var toolbarButtons = toolbarCommands.map(function(group) {
            return group.map(function(commandName) {
              var command = _this.commandOrchestrator.getCommand(commandName);
              return {
                commandName,
                buttonContent: command.icon ? command.icon(getIcon) : getIcon(commandName),
                buttonProps: command.buttonProps,
                buttonComponentClass: command.buttonComponentClass
              };
            });
          });
          return React.createElement(
            "div",
            { className: ClassNames_1.classNames("react-mde", "react-mde-tabbed-layout", classes === null || classes === void 0 ? void 0 : classes.reactMde) },
            React.createElement(_1.Toolbar, { classes: classes === null || classes === void 0 ? void 0 : classes.toolbar, buttons: toolbarButtons, onCommand: this.handleCommand, onTabChange: this.handleTabChange, tab: selectedTab, readOnly, disablePreview, l18n, buttonProps: finalChildProps.commandButtons, writeButtonProps: finalChildProps.writeButton, previewButtonProps: finalChildProps.previewButton }),
            React.createElement(
              "div",
              { className: ClassNames_1.classNames({ invisible: selectedTab !== "write" }) },
              React.createElement(_1.TextArea, { classes: classes === null || classes === void 0 ? void 0 : classes.textArea, suggestionsDropdownClasses: classes === null || classes === void 0 ? void 0 : classes.suggestionsDropdown, suggestionsAutoplace: this.props.suggestionsAutoplace, refObject: this.finalRefs.textarea, onChange: this.handleTextChange, onPaste: this.handlePaste, onDrop: this.handleDrop, readOnly, textAreaComponent, textAreaProps: childProps && childProps.textArea, height: this.state.editorHeight, heightUnits: this.props.heightUnits, value, suggestionTriggerCharacters, loadSuggestions, onPossibleKeyCommand: this.commandOrchestrator.handlePossibleKeyCommand }),
              this.props.paste && React.createElement(
                "label",
                { className: ClassNames_1.classNames("image-tip") },
                React.createElement("input", { className: ClassNames_1.classNames("image-input"), type: "file", accept: (_a = this.props.paste.accept) !== null && _a !== void 0 ? _a : pasteOptionDefaults.accept, multiple: (_b = this.props.paste.multiple) !== null && _b !== void 0 ? _b : pasteOptionDefaults.multiple, onChange: this.handleImageSelection }),
                React.createElement("span", null, l18n.pasteDropSelect)
              )
            ),
            selectedTab !== "write" && React.createElement(_1.Preview, { classes: classes === null || classes === void 0 ? void 0 : classes.preview, refObject: this.finalRefs.preview, loadingPreview, minHeight: minPreviewHeight, heightUnits, generateMarkdownPreview, markdown: value })
          );
        };
        ReactMde2.defaultProps = {
          commands: defaults_1.getDefaultCommandMap(),
          toolbarCommands: defaults_1.getDefaultToolbarCommands(),
          getIcon: function(name) {
            return React.createElement(icons_1.SvgIcon, { icon: name });
          },
          readOnly: false,
          l18n: react_mde_en_1.enL18n,
          minEditorHeight: 200,
          maxEditorHeight: 500,
          minPreviewHeight: 200,
          heightUnits: "px",
          selectedTab: "write",
          disablePreview: false,
          suggestionTriggerCharacters: ["@"],
          suggestionsAutoplace: false
        };
        return ReactMde2;
      }(React.Component)
    );
    exports.ReactMde = ReactMde;
  }
});

// node_modules/react-mde/lib/js/components/index.js
var require_components = __commonJS({
  "node_modules/react-mde/lib/js/components/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_ToolbarButtonGroup(), exports);
    __exportStar(require_ToolbarButton(), exports);
    __exportStar(require_MdeFontAwesomeIcon(), exports);
    __exportStar(require_Preview(), exports);
    __exportStar(require_TextArea(), exports);
    __exportStar(require_Toolbar(), exports);
    __exportStar(require_ReactMde(), exports);
    __exportStar(require_SuggestionsDropdown(), exports);
  }
});

// node_modules/react-mde/lib/js/index.js
var require_js = __commonJS({
  "node_modules/react-mde/lib/js/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDefaultToolbarCommands = exports.getDefaultCommandMap = exports.MdeFontAwesomeIcon = exports.SvgIcon = exports.MarkdownUtil = exports.ToolbarButtonGroup = exports.Toolbar = exports.Preview = exports.SuggestionsDropdown = exports.TextArea = void 0;
    var MarkdownUtil = require_MarkdownUtil();
    exports.MarkdownUtil = MarkdownUtil;
    var components_1 = require_components();
    Object.defineProperty(exports, "TextArea", { enumerable: true, get: function() {
      return components_1.TextArea;
    } });
    Object.defineProperty(exports, "SuggestionsDropdown", { enumerable: true, get: function() {
      return components_1.SuggestionsDropdown;
    } });
    Object.defineProperty(exports, "Preview", { enumerable: true, get: function() {
      return components_1.Preview;
    } });
    Object.defineProperty(exports, "Toolbar", { enumerable: true, get: function() {
      return components_1.Toolbar;
    } });
    Object.defineProperty(exports, "ToolbarButtonGroup", { enumerable: true, get: function() {
      return components_1.ToolbarButtonGroup;
    } });
    var icons_1 = require_icons();
    Object.defineProperty(exports, "SvgIcon", { enumerable: true, get: function() {
      return icons_1.SvgIcon;
    } });
    Object.defineProperty(exports, "MdeFontAwesomeIcon", { enumerable: true, get: function() {
      return icons_1.MdeFontAwesomeIcon;
    } });
    var defaults_1 = require_defaults();
    Object.defineProperty(exports, "getDefaultCommandMap", { enumerable: true, get: function() {
      return defaults_1.getDefaultCommandMap;
    } });
    Object.defineProperty(exports, "getDefaultToolbarCommands", { enumerable: true, get: function() {
      return defaults_1.getDefaultToolbarCommands;
    } });
    exports.default = components_1.ReactMde;
  }
});
export default require_js();
/*! Bundled license information:

react-mde/lib/js/util/ClassNames.js:
  (*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  *)

react-mde/lib/js/util/InsertTextAtPosition.js:
  (*!
   * The MIT License
     Copyright (c) 2018 Dmitriy Kubyshkin
     Copied from https://github.com/grassator/insert-text-at-cursor
   *)
*/
//# sourceMappingURL=react-mde.js.map
