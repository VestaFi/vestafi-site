/* @ds-bundle: {"format":4,"namespace":"VestaFiDesignSystem_c64cf7","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"a30fce08a09f","components/core/Badge.jsx":"b762c9da8979","components/core/Card.jsx":"bd3914901035","components/core/Divider.jsx":"29c505b48095","components/core/Stat.jsx":"2ce5b0725ba7","components/core/Tag.jsx":"cb1791c59c03","components/feedback/Alert.jsx":"34e437dec196","components/feedback/ProgressBar.jsx":"f0da2a0e60de","components/feedback/Tooltip.jsx":"6c56b975c9cd","components/forms/Button.jsx":"609d1a44a23f","components/forms/Checkbox.jsx":"aed2a8b53e23","components/forms/IconButton.jsx":"04e5667d4b52","components/forms/Input.jsx":"3635fb01cd7d","components/forms/Radio.jsx":"488499ff37a2","components/forms/Select.jsx":"65bddd8618cb","components/forms/Switch.jsx":"4d62532b0cf0","components/forms/Textarea.jsx":"11202e44ecd3","components/navigation/Accordion.jsx":"70b32c4e16e6","components/navigation/Breadcrumb.jsx":"4c3b49196f77","components/navigation/Tabs.jsx":"a28138a53d69","ui_kits/app/AppShell.jsx":"bc8c900a8b9e","ui_kits/app/Dashboard.jsx":"894eff75097e","ui_kits/app/Login.jsx":"3a2d207ba57a","ui_kits/website/Features.jsx":"789fd9ba200c","ui_kits/website/Footer.jsx":"79bbedfd2e91","ui_kits/website/Hero.jsx":"fdcf5180b6d8","ui_kits/website/Icon.jsx":"78335e3b45d5","ui_kits/website/Nav.jsx":"96798fadc68f","ui_kits/website/Pricing.jsx":"e2968adad7bf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VestaFiDesignSystem_c64cf7 = window.VestaFiDesignSystem_c64cf7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/** VestaFi Avatar — initials or image, circular. */
function Avatar({
  src,
  name = '',
  size = 40,
  tone = 'brand',
  style = {}
}) {
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const tones = {
    brand: ['var(--orange-soft)', 'var(--orange-deep)'],
    ink: ['var(--info-soft)', 'var(--ink)'],
    navy: ['var(--navy-bg)', '#fff']
  };
  const [bg, fg] = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      background: bg,
      color: fg,
      flex: 'none',
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: size * 0.4,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/** VestaFi Badge — small status/label pill. */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  style = {}
}) {
  const map = {
    neutral: {
      soft: ['var(--paper-shade)', 'var(--ink-soft)'],
      solid: ['var(--ink)', '#fff']
    },
    brand: {
      soft: ['var(--orange-soft)', 'var(--orange-deep)'],
      solid: ['var(--orange)', '#fff']
    },
    success: {
      soft: ['var(--success-soft)', 'var(--success)'],
      solid: ['var(--success)', '#fff']
    },
    warning: {
      soft: ['var(--warning-soft)', 'var(--warning)'],
      solid: ['var(--warning)', '#fff']
    },
    danger: {
      soft: ['var(--danger-soft)', 'var(--danger)'],
      solid: ['var(--danger)', '#fff']
    },
    info: {
      soft: ['var(--info-soft)', 'var(--ink)'],
      solid: ['var(--ink)', '#fff']
    }
  };
  const [bg, fg] = (map[tone] || map.neutral)[variant] || map.neutral.soft;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.01em',
      lineHeight: 1,
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VestaFi Card — the primary content container. White surface, soft shadow,
 * generous rounding. `tone` swaps to soft-orange or dark-navy surfaces.
 */
function Card({
  children,
  tone = 'default',
  padding = 'md',
  interactive = false,
  as = 'div',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-7)'
  };
  const tones = {
    default: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border)'
    },
    soft: {
      background: 'var(--orange-soft)',
      color: 'var(--ink-deep)',
      border: '1px solid transparent'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)',
      border: '1px solid var(--border)'
    },
    dark: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      border: '1px solid transparent'
    }
  };
  const t = tones[tone] || tones.default;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding] ?? pads.md,
      boxShadow: hover && interactive ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover && interactive ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/** VestaFi Divider — hairline rule, optional centered label. */
function Divider({
  label,
  tone = 'light',
  spacing = 'var(--space-5)',
  style = {}
}) {
  const color = tone === 'dark' ? 'var(--border-navy)' : 'var(--border)';
  const textColor = tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--ink-faint)';
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", {
      style: {
        border: 'none',
        borderTop: `1px solid ${color}`,
        margin: `${spacing} 0`,
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      margin: `${spacing} 0`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: textColor
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: color
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/** VestaFi Stat — a headline metric with label and optional delta. */
function Stat({
  label,
  value,
  delta,
  deltaDirection,
  prefix,
  suffix,
  tone = 'default',
  style = {}
}) {
  const onDark = tone === 'dark';
  const dir = deltaDirection || (delta && String(delta).trim().startsWith('-') ? 'down' : 'up');
  const deltaColor = dir === 'down' ? 'var(--danger)' : 'var(--success)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--ink-faint)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 34,
      lineHeight: 1,
      color: onDark ? '#fff' : 'var(--ink-deep)',
      letterSpacing: '-.01em'
    }
  }, prefix, value, suffix), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: deltaColor,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2
    }
  }, dir === 'down' ? '▾' : '▴', " ", delta)));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** VestaFi Tag — removable/selectable chip. */
function Tag({
  children,
  onRemove,
  selected = false,
  icon = null,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: selected ? 'var(--orange-deep)' : 'var(--ink)',
      background: selected ? 'var(--orange-soft)' : 'var(--white)',
      border: `1.5px solid ${selected ? 'var(--orange)' : 'var(--border-strong)'}`,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, icon, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--ink-faint)',
      fontSize: 15,
      lineHeight: 1,
      padding: 0,
      marginLeft: 2
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/** VestaFi Alert — inline message banner with tone + optional dismiss. */
function Alert({
  children,
  title,
  tone = 'info',
  icon,
  onDismiss,
  style = {}
}) {
  const map = {
    info: ['var(--info-soft)', 'var(--ink)', 'ⓘ'],
    success: ['var(--success-soft)', 'var(--success)', '✓'],
    warning: ['var(--warning-soft)', 'var(--warning)', '!'],
    danger: ['var(--danger-soft)', 'var(--danger)', '!'],
    brand: ['var(--orange-soft)', 'var(--orange-deep)', '★']
  };
  const [bg, accent, defIcon] = map[tone] || map.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: bg,
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      fontFamily: 'var(--font-body)',
      borderLeft: `4px solid ${accent}`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent,
      fontWeight: 800,
      fontSize: 16,
      lineHeight: 1.5,
      flex: 'none'
    }
  }, icon || defIcon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--ink-deep)',
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      lineHeight: 1.5
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--ink-faint)',
      fontSize: 18,
      lineHeight: 1,
      padding: 0,
      flex: 'none'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** VestaFi ProgressBar — track + fill, optional label & value. */
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'brand',
  label,
  showValue = false,
  size = 'md',
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const height = {
    sm: 6,
    md: 10,
    lg: 14
  }[size] || 10;
  const fill = {
    brand: 'var(--orange)',
    ink: 'var(--ink)',
    success: 'var(--success)'
  }[tone] || 'var(--orange)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6,
      fontSize: 13
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--ink-faint)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--paper-shade)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** VestaFi Tooltip — hover label on a wrapped trigger. */
function Tooltip({
  children,
  label,
  placement = 'top',
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[placement] || {};
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--navy-bg-deep)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      zIndex: 50,
      boxShadow: 'var(--shadow-md)',
      opacity: show ? 1 : 0,
      transform: `${pos.transform || ''} ${show ? 'translateY(0)' : 'translateY(2px)'}`,
      transition: 'opacity var(--dur-fast) var(--ease-out)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VestaFi Button — friendly, rounded, warm.
 * Variants: primary (orange), secondary (ink), ghost, soft (orange tint), danger.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 14,
      radius: 'var(--radius-sm)',
      gap: 6
    },
    md: {
      padding: '12px 22px',
      fontSize: 16,
      radius: 'var(--radius-md)',
      gap: 8
    },
    lg: {
      padding: '16px 30px',
      fontSize: 18,
      radius: 'var(--radius-md)',
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: 'var(--text-on-brand)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-brand)'
    },
    secondary: {
      background: 'var(--action-secondary)',
      color: 'var(--white)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'none'
    },
    soft: {
      background: 'var(--orange-soft)',
      color: 'var(--orange-deep)',
      border: '1.5px solid transparent',
      boxShadow: 'none'
    },
    danger: {
      background: 'var(--danger)',
      color: 'var(--white)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverBg = {
    primary: 'var(--action-primary-hover)',
    secondary: 'var(--action-secondary-hover)',
    ghost: 'var(--orange-tint)',
    soft: 'var(--orange-tint)',
    danger: '#bd3a3a'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1,
      padding: s.padding,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      transform: !disabled && active ? 'translateY(1px) scale(0.985)' : 'none',
      ...v,
      ...(hover && !disabled ? {
        background: hoverBg
      } : {}),
      ...(variant === 'ghost' && hover && !disabled ? {
        borderColor: 'var(--orange)',
        color: 'var(--orange-deep)'
      } : {}),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** VestaFi Checkbox with label. Orange when checked. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {}
}) {
  const inputId = id || `vf-cb-${React.useId()}`;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--orange)' : 'var(--border-strong)'}`,
      background: on ? 'var(--orange)' : 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 14,
      fontWeight: 800,
      lineHeight: 1,
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, on ? '✓' : ''), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ink-soft)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VestaFi IconButton — square/round button for a single icon.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  label,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const [hover, setHover] = React.useState(false);
  const variants = {
    primary: {
      background: 'var(--orange)',
      color: '#fff',
      border: '1.5px solid transparent',
      hover: 'var(--orange-deep)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1.5px solid var(--border-strong)',
      hover: 'var(--orange-tint)'
    },
    soft: {
      background: 'var(--orange-soft)',
      color: 'var(--orange-deep)',
      border: '1.5px solid transparent',
      hover: 'var(--orange-tint)'
    },
    bare: {
      background: 'transparent',
      color: 'var(--ink-soft)',
      border: '1.5px solid transparent',
      hover: 'var(--paper-shade)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      background: hover && !disabled ? v.hover : v.background,
      color: v.color,
      border: v.border,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** VestaFi text Input with optional label, hint, error, and adornments. */
function Input({
  label,
  hint,
  error,
  leftIcon = null,
  rightIcon = null,
  id,
  disabled = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `vf-input-${React.useId()}`;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--orange)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)',
      fontFamily: 'var(--font-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: disabled ? 'var(--paper-shade)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      boxShadow: focus && !error ? '0 0 0 4px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-faint)',
      display: 'flex'
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--ink-deep)',
      padding: '12px 0',
      minWidth: 0,
      ...style
    }
  }, rest)), rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-faint)',
      display: 'flex'
    }
  }, rightIcon)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--danger)' : 'var(--ink-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** VestaFi Radio button with label. Part of a group via shared `name`. */
function Radio({
  label,
  checked,
  defaultChecked,
  onChange,
  name,
  value,
  disabled = false,
  id,
  style = {}
}) {
  const inputId = id || `vf-r-${React.useId()}`;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    onChange: handle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: '50%',
      border: `1.5px solid ${on ? 'var(--orange)' : 'var(--border-strong)'}`,
      background: 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: 'var(--orange)',
      transform: on ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ink-soft)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** VestaFi Select — styled native dropdown with chevron. */
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  placeholder,
  disabled = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `vf-sel-${React.useId()}`;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--orange)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)',
      fontFamily: 'var(--font-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--ink-deep)',
      background: disabled ? 'var(--paper-shade)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 42px 12px 14px',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus && !error ? '0 0 0 4px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-faint)',
      fontSize: 14
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--danger)' : 'var(--ink-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** VestaFi Switch (toggle). Orange track when on. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  id,
  style = {}
}) {
  const inputId = id || `vf-sw-${React.useId()}`;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  const control = /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    id: inputId,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 46,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      padding: 3,
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: on ? 'var(--orange)' : 'var(--ink-faint)',
      opacity: disabled ? 0.5 : 1,
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: on ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ink-soft)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** VestaFi multi-line textarea with label / hint / error. */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  disabled = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `vf-ta-${React.useId()}`;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--orange)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)',
      fontFamily: 'var(--font-body)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--ink-deep)',
      background: disabled ? 'var(--paper-shade)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      resize: 'vertical',
      outline: 'none',
      boxShadow: focus && !error ? '0 0 0 4px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--danger)' : 'var(--ink-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
/** VestaFi Accordion — expandable disclosure list. */
function Accordion({
  items = [],
  defaultOpen = 0,
  allowMultiple = false,
  style = {}
}) {
  const initial = allowMultiple ? new Set(Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen].filter(x => x != null)) : new Set(defaultOpen != null ? [defaultOpen] : []);
  const [open, setOpen] = React.useState(initial);
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--white)',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i ? '1px solid var(--border)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        padding: '16px 18px',
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        fontWeight: 700,
        color: 'var(--ink-deep)'
      }
    }, it.title, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--orange)',
        fontSize: 18,
        transition: 'transform var(--dur-base) var(--ease-out)',
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
      }
    }, "\uFF0B")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 18px 16px',
        fontSize: 15,
        color: 'var(--ink-soft)',
        lineHeight: 1.55
      }
    }, it.content)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** VestaFi Breadcrumb — path trail with chevron separators. */
function Breadcrumb({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flexWrap: 'wrap'
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === 'string' ? it : it.label;
    const href = typeof it === 'string' ? undefined : it.href;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, last || !href ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: last ? 700 : 600,
        color: last ? 'var(--ink-deep)' : 'var(--ink-faint)'
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--ink-faint)',
        textDecoration: 'none'
      }
    }, label), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-faint)',
        fontSize: 12
      }
    }, "\u203A"));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** VestaFi Tabs — underline-style tab bar. Controlled or uncontrolled. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const first = tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1.5px solid var(--border)',
      ...style
    }
  }, tabs.map(t => {
    const val = typeof t === 'string' ? t : t.value;
    const lbl = typeof t === 'string' ? t : t.label;
    const on = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(val),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        fontWeight: on ? 700 : 600,
        color: on ? 'var(--ink-deep)' : 'var(--ink-faint)',
        padding: '10px 14px',
        position: 'relative',
        marginBottom: '-1.5px',
        borderBottom: `2.5px solid ${on ? 'var(--orange)' : 'transparent'}`,
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, lbl);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
// VestaFi app — sidebar + top bar shell.
const {
  Avatar,
  IconButton,
  Badge
} = window.VestaFiDesignSystem_c64cf7;
function AppShell({
  active,
  onNav,
  user,
  children
}) {
  const nav = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'layout-dashboard'
  }, {
    id: 'goals',
    label: 'Goals',
    icon: 'target'
  }, {
    id: 'invest',
    label: 'Investing',
    icon: 'line-chart'
  }, {
    id: 'activity',
    label: 'Activity',
    icon: 'receipt'
  }, {
    id: 'learn',
    label: 'Learn',
    icon: 'graduation-cap'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--paper)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 244,
      flex: 'none',
      background: 'var(--navy-bg-deep)',
      display: 'flex',
      flexDirection: 'column',
      padding: '22px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px 26px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full-dark.png",
    alt: "VestaFi",
    style: {
      height: 28
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, nav.map(n => {
    const on = n.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav && onNav(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        textAlign: 'left',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        padding: '11px 12px',
        fontSize: 15,
        fontWeight: 600,
        fontFamily: 'var(--font-body)',
        background: on ? 'var(--orange)' : 'transparent',
        color: on ? '#fff' : 'var(--text-on-dark-muted)',
        transition: 'background var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = 'var(--navy-bg)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 19
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: 'var(--navy-bg)',
      borderRadius: 'var(--radius-lg)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#fff',
      marginBottom: 4
    }
  }, "Grow plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-on-dark-muted)',
      marginBottom: 12
    }
  }, "Investing unlocked"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      border: 'none',
      background: 'var(--orange)',
      color: '#fff',
      fontWeight: 700,
      fontSize: 13,
      padding: '9px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, "Upgrade"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 68,
      flex: 'none',
      borderBottom: '1px solid var(--border)',
      background: 'var(--paper)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-faint)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search goals, transactions\u2026",
    style: {
      width: '100%',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 14px 9px 36px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      background: 'var(--white)',
      outline: 'none',
      color: 'var(--ink-deep)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    variant: "bare"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: user.name,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink-deep)'
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-faint)'
    }
  }, user.email))))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '28px'
    }
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Dashboard.jsx
try { (() => {
// VestaFi app — dashboard view (net worth, goals, portfolio, activity).
const {
  Card,
  Stat,
  Badge,
  ProgressBar,
  Button,
  Tabs,
  Avatar
} = window.VestaFiDesignSystem_c64cf7;
function Sparkline({
  points,
  color = 'var(--orange)',
  w = 260,
  h = 64
}) {
  const max = Math.max(...points),
    min = Math.min(...points);
  const range = max - min || 1;
  const step = w / (points.length - 1);
  const d = points.map((p, i) => `${i ? 'L' : 'M'}${(i * step).toFixed(1)},${(h - (p - min) / range * h).toFixed(1)}`).join(' ');
  const area = `${d} L${w},${h} L0,${h} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: h,
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "spark",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#spark)"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function Dashboard({
  user
}) {
  const [range, setRange] = React.useState('1Y');
  const goals = [{
    name: 'Home deposit',
    icon: 'home',
    pct: 68,
    current: '68,200',
    target: '100,000',
    tone: 'brand'
  }, {
    name: 'Emergency fund',
    icon: 'shield',
    pct: 92,
    current: '18,400',
    target: '20,000',
    tone: 'success'
  }, {
    name: 'Europe 2027',
    icon: 'plane',
    pct: 34,
    current: '3,400',
    target: '10,000',
    tone: 'ink'
  }];
  const holdings = [{
    name: 'Australian Shares',
    pct: 35,
    val: '87,120',
    chg: '+9.1%',
    up: true
  }, {
    name: 'Global Shares',
    pct: 40,
    val: '99,564',
    chg: '+12.4%',
    up: true
  }, {
    name: 'Bonds',
    pct: 15,
    val: '37,336',
    chg: '+2.8%',
    up: true
  }, {
    name: 'Cash',
    pct: 10,
    val: '24,890',
    chg: '+0.4%',
    up: true
  }];
  const activity = [{
    icon: 'arrow-down-left',
    label: 'Contribution',
    sub: 'Auto-invest · Grow',
    amt: '+$750.00',
    up: true
  }, {
    icon: 'repeat',
    label: 'Rebalanced portfolio',
    sub: 'Kept you on target',
    amt: '',
    up: true
  }, {
    icon: 'coins',
    label: 'Round-ups',
    sub: '14 purchases',
    amt: '+$23.40',
    up: true
  }, {
    icon: 'arrow-up-right',
    label: 'Monthly fee',
    sub: 'Grow plan',
    amt: '-$9.00',
    up: false
  }];
  const series = [210, 214, 209, 220, 232, 228, 240, 244, 238, 246, 249, 248.9];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      margin: '0 0 2px'
    }
  }, "Good afternoon, ", user.name.split(' ')[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-faint)',
      fontSize: 15
    }
  }, "Here's how your plan is tracking.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    })
  }, "Add money")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Total portfolio value",
    prefix: "$",
    value: "248,910",
    delta: "8.2% this year"
  }), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['1M', '6M', '1Y', 'All'],
    value: range,
    onChange: setRange,
    style: {
      border: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    points: series,
    w: 620,
    h: 92
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    padding: "lg",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "dark",
    label: "Projected at retirement",
    prefix: "$",
    value: "1.24M"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, "On track for your target of $1.1M")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Fees saved vs. industry avg",
    prefix: "$",
    value: "1,240",
    delta: "this year",
    deltaDirection: "up"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 20
    }
  }, "Your goals"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--orange)'
    }
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, goals.map(g => /*#__PURE__*/React.createElement(Card, {
    key: g.name,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--orange-soft)',
      color: 'var(--orange-deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--ink-deep)',
      fontSize: 16
    }
  }, g.name)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: g.pct,
    tone: g.tone,
    showValue: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 13,
      color: 'var(--ink-faint)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-deep)'
    }
  }, "$", g.current), " of $", g.target))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontSize: 20
    }
  }, "Portfolio allocation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, holdings.map(h => /*#__PURE__*/React.createElement("div", {
    key: h.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, h.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-faint)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-deep)'
    }
  }, "$", h.val), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--success)',
      fontWeight: 700
    }
  }, h.chg))), /*#__PURE__*/React.createElement(ProgressBar, {
    value: h.pct,
    tone: "ink",
    size: "sm"
  }))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontSize: 20
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, activity.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: i ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      flex: 'none',
      borderRadius: '50%',
      background: a.up ? 'var(--success-soft)' : 'var(--paper-shade)',
      color: a.up ? 'var(--success)' : 'var(--ink-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink-deep)'
    }
  }, a.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-faint)'
    }
  }, a.sub)), a.amt && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: a.up ? 'var(--success)' : 'var(--ink-soft)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, a.amt)))))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Login.jsx
try { (() => {
// VestaFi app — split login screen.
const {
  Button,
  Input,
  Checkbox,
  Divider
} = window.VestaFiDesignSystem_c64cf7;
function Login({
  onLogin
}) {
  const [email, setEmail] = React.useState('priya@example.com');
  const [pw, setPw] = React.useState('••••••••');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.svg",
    alt: "VestaFi",
    style: {
      height: 32,
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      margin: '0 0 6px'
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 28px',
      color: 'var(--ink-soft)'
    }
  }, "Log in to pick up where you left off."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin && onLogin();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--orange)'
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    block: true
  }, "Log in")), /*#__PURE__*/React.createElement(Divider, {
    label: "or"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    block: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "fingerprint",
      size: 18
    })
  }, "Continue with passkey"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 24,
      fontSize: 14,
      color: 'var(--ink-soft)'
    }
  }, "New to VestaFi? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onLogin && onLogin();
    },
    style: {
      fontWeight: 700,
      color: 'var(--orange)'
    }
  }, "Create an account")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--navy-bg)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 56,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icon.svg",
    style: {
      position: 'absolute',
      right: -60,
      top: -60,
      width: 320,
      opacity: 0.08
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 34,
      lineHeight: 1.15,
      marginBottom: 20
    }
  }, "\"VestaFi finally made my money feel ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--orange)',
      fontStyle: 'italic'
    }
  }, "understandable"), ".\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--orange)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 800
    }
  }, "PS"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, "Priya Sharma"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Grow member \xB7 Sydney"))))));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Features.jsx
try { (() => {
// VestaFi marketing — feature grid + "how it works" band.
const {
  Card,
  Badge
} = window.VestaFiDesignSystem_c64cf7;
function Features() {
  const items = [{
    icon: 'target',
    title: 'Goals that adapt',
    body: 'Set what matters — a home, a career break, retirement — and your plan flexes as life changes.'
  }, {
    icon: 'line-chart',
    title: 'Invest with confidence',
    body: 'Diversified portfolios matched to your risk, rebalanced automatically. No stock-picking required.'
  }, {
    icon: 'shield-check',
    title: 'Genuinely on your side',
    body: 'One flat fee, zero commissions. We only make money when you do — never from selling you products.'
  }, {
    icon: 'sparkles',
    title: 'Plain-English guidance',
    body: 'Every recommendation comes with a clear why, so you always understand the plan you\u2019re following.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "vf-eyebrow"
  }, "Why VestaFi"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      margin: '12px 0 14px'
    }
  }, "Advice that feels ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--orange)',
      fontStyle: 'italic'
    }
  }, "genuinely"), " personal"), /*#__PURE__*/React.createElement("p", {
    className: "vf-lead"
  }, "The clarity of a great adviser, the ease of a modern app \u2014 built for everyday Australians.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    interactive: true,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--orange-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--orange-deep)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '2px 0 6px',
      fontSize: 19
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: 'var(--ink-soft)'
    }
  }, it.body))))))));
}
window.Features = Features;
function HowItWorks() {
  const steps = [{
    n: '01',
    title: 'Tell us your goals',
    body: 'A few quick questions about where you are and where you want to be.'
  }, {
    n: '02',
    title: 'Get your plan',
    body: 'We build a personalised strategy and portfolio, explained in plain English.'
  }, {
    n: '03',
    title: 'Watch it grow',
    body: 'Automate contributions, track progress, and adjust anytime — we\u2019re with you.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-bg)'
    },
    className: "vf-on-dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '84px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "vf-eyebrow",
    style: {
      color: 'var(--orange)'
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      margin: '12px 0 0',
      color: '#fff'
    }
  }, "Three steps to a plan you trust")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      borderTop: '2px solid var(--orange)',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      fontSize: 40,
      color: 'var(--orange)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: 21,
      margin: '14px 0 8px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)',
      fontSize: 15,
      margin: 0
    }
  }, s.body))))));
}
window.HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// VestaFi marketing — CTA band + footer.
const {
  Button
} = window.VestaFiDesignSystem_c64cf7;
function CtaBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '0 32px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--orange)',
      borderRadius: 'var(--radius-2xl)',
      padding: '56px 48px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 40,
      margin: '0 0 12px'
    }
  }, "Ready to build a plan you trust?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 18,
      margin: '0 0 28px'
    }
  }, "Join 80,000+ Australians investing with clarity."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Start your plan"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.5)'
    }
  }, "Book a call")))));
}
window.CtaBand = CtaBand;
function Footer() {
  const cols = [{
    h: 'Product',
    links: ['How it works', 'Investing', 'Pricing', 'Security']
  }, {
    h: 'Company',
    links: ['About', 'Careers', 'Press', 'Contact']
  }, {
    h: 'Learn',
    links: ['Guides', 'Calculators', 'Blog', 'Help centre']
  }, {
    h: 'Legal',
    links: ['PDS', 'FSG', 'Privacy', 'Terms']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-bg-deep)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '64px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr repeat(4, 1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full-dark.png",
    alt: "VestaFi",
    style: {
      height: 30,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      maxWidth: 260,
      margin: 0
    }
  }, "Personal wealth, simplified. Guidance for everyday Australians.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--orange)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-on-dark-muted)'
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: '1px solid var(--border-navy)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, "\xA9 2026 VestaFi Pty Ltd \xB7 AFSL 000000"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Made in Melbourne, Australia"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// VestaFi marketing hero + interactive strategy widget.
const {
  Button,
  Badge,
  Stat
} = window.VestaFiDesignSystem_c64cf7;

// A small interactive "strategy" widget: pick a goal, drag the monthly amount,
// watch the projected balance update. Mirrors the "strategy widget" brand token.
function StrategyWidget() {
  const goals = [{
    id: 'home',
    label: 'Home deposit',
    years: 5,
    icon: 'home'
  }, {
    id: 'retire',
    label: 'Retire early',
    years: 25,
    icon: 'palmtree'
  }, {
    id: 'wealth',
    label: 'Grow wealth',
    years: 10,
    icon: 'trending-up'
  }];
  const [goal, setGoal] = React.useState(goals[0]);
  const [monthly, setMonthly] = React.useState(750);
  const rate = 0.065;
  const months = goal.years * 12;
  const r = rate / 12;
  const fv = monthly * ((Math.pow(1 + r, months) - 1) / r);
  const projected = Math.round(fv);
  const fmt = n => n.toLocaleString('en-AU');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-6)',
      width: '100%',
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 18,
      color: 'var(--ink-deep)'
    }
  }, "Your strategy"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Live projection")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20
    }
  }, goals.map(g => {
    const on = g.id === goal.id;
    return /*#__PURE__*/React.createElement("button", {
      key: g.id,
      onClick: () => setGoal(g),
      style: {
        flex: 1,
        cursor: 'pointer',
        textAlign: 'center',
        border: `1.5px solid ${on ? 'var(--orange)' : 'var(--border-strong)'}`,
        background: on ? 'var(--orange-soft)' : 'var(--white)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 6px',
        transition: 'all var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        color: on ? 'var(--orange)' : 'var(--ink-faint)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: g.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: on ? 'var(--orange-deep)' : 'var(--ink-soft)',
        marginTop: 6
      }
    }, g.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "Invest monthly"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 20,
      color: 'var(--ink-deep)'
    }
  }, "$", fmt(monthly))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "100",
    max: "2500",
    step: "50",
    value: monthly,
    onChange: e => setMonthly(Number(e.target.value)),
    style: {
      width: '100%',
      accentColor: 'var(--orange)',
      marginBottom: 22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-bg)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "dark",
    label: `Projected in ${goal.years} years`,
    prefix: "$",
    value: fmt(projected)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Assumes a 6.5% average annual return.")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 32px 88px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "vf-eyebrow"
  }, "Personal wealth, simplified"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 60,
      lineHeight: 1.05,
      margin: '14px 0 20px',
      color: 'var(--ink-deep)'
    }
  }, "Your money, working toward the life you ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--orange)',
      fontStyle: 'italic'
    }
  }, "actually"), " want."), /*#__PURE__*/React.createElement("p", {
    className: "vf-lead",
    style: {
      maxWidth: 480,
      marginBottom: 30
    }
  }, "VestaFi brings your goals, accounts and strategy into one clear plan \u2014 with plain-English guidance at every step. No jargon, no commissions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Start your plan"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Members",
    value: "80k+"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Avg. fees saved / yr",
    prefix: "$",
    value: "1,240"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Rating",
    value: "4.9",
    suffix: "\u2605"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(StrategyWidget, null))));
}
window.Hero = Hero;
window.StrategyWidget = StrategyWidget;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
// Tiny Lucide icon wrapper for the UI kits. Requires the lucide UMD script
// to be loaded on the page (see index.html). Re-inits after mount so the
// <i data-lucide> placeholder is swapped for an SVG.
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  stroke = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      window.lucide.createIcons({
        icons: window.lucide.icons,
        attrs: {
          width: size,
          height: size,
          'stroke-width': stroke
        },
        nameAttr: 'data-lucide'
      });
    }
  });
  return /*#__PURE__*/React.createElement("i", {
    ref: ref,
    "data-lucide": name,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// VestaFi marketing site — top navigation bar.
const {
  Button
} = window.VestaFiDesignSystem_c64cf7;
function Nav({
  onNav,
  active
}) {
  const links = ['How it works', 'Investing', 'Pricing', 'Learn'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(253,252,249,0.85)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.svg",
    alt: "VestaFi",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l === 'Pricing' ? 'pricing' : 'home');
    },
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--ink)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-sm)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--orange-tint)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Get started"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
// VestaFi marketing — pricing + FAQ.
const {
  Card,
  Button,
  Badge,
  Accordion
} = window.VestaFiDesignSystem_c64cf7;
function Pricing() {
  const plans = [{
    name: 'Starter',
    price: '0',
    per: 'forever',
    tagline: 'Track goals & budget',
    features: ['Goal tracking', 'Spending insights', 'Plain-English guidance'],
    cta: 'Get started',
    featured: false
  }, {
    name: 'Grow',
    price: '9',
    per: 'month',
    tagline: 'Invest & automate',
    features: ['Everything in Starter', 'Managed portfolios', 'Automatic rebalancing', 'Round-ups & auto-invest'],
    cta: 'Start 30-day trial',
    featured: true
  }, {
    name: 'Wealth',
    price: '29',
    per: 'month',
    tagline: 'Advice & tax strategy',
    features: ['Everything in Grow', 'Dedicated adviser', 'Tax & super optimisation', 'Estate planning tools'],
    cta: 'Talk to us',
    featured: false
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "vf-eyebrow"
  }, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      margin: '12px 0 14px'
    }
  }, "One flat fee. No commissions, ever."), /*#__PURE__*/React.createElement("p", {
    className: "vf-lead"
  }, "Cancel anytime. Your money stays yours \u2014 held with a licensed custodian.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      alignItems: 'stretch'
    }
  }, plans.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    tone: p.featured ? 'dark' : 'default',
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      border: p.featured ? '2px solid var(--orange)' : undefined
    }
  }, p.featured && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -12,
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    variant: "solid"
  }, "Most popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 20,
      color: p.featured ? '#fff' : 'var(--ink-deep)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: p.featured ? 'var(--text-on-dark-muted)' : 'var(--ink-faint)',
      marginBottom: 16
    }
  }, p.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: p.featured ? '#fff' : 'var(--ink-deep)'
    }
  }, "$"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      fontSize: 48,
      lineHeight: 1,
      color: p.featured ? '#fff' : 'var(--ink-deep)'
    }
  }, p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: p.featured ? 'var(--text-on-dark-muted)' : 'var(--ink-faint)'
    }
  }, "/", p.per)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '0 0 24px',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      flex: 1
    }
  }, p.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 15,
      color: p.featured ? 'var(--text-on-dark)' : 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), f))), /*#__PURE__*/React.createElement(Button, {
    variant: p.featured ? 'primary' : 'ghost',
    block: true
  }, p.cta))))));
}
window.Pricing = Pricing;
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '84px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "vf-eyebrow"
  }, "Questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 36,
      margin: '12px 0 0'
    }
  }, "Good to know")), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: 'Is my money safe with VestaFi?',
      content: 'Your funds are held with a licensed Australian custodian, kept entirely separate from VestaFi\u2019s own accounts. We never touch or lend your money.'
    }, {
      title: 'How does VestaFi make money?',
      content: 'A single flat monthly fee — that\u2019s it. No commissions, no product kickbacks, no exit fees. Our incentives are aligned with yours.'
    }, {
      title: 'Do I need a lot to get started?',
      content: 'No minimum on the Starter plan, and you can begin investing from as little as $50 a month on Grow.'
    }, {
      title: 'Can I speak to a real person?',
      content: 'Absolutely. Wealth members get a dedicated adviser, and every plan includes support from our Melbourne-based team.'
    }]
  })));
}
window.Faq = Faq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
