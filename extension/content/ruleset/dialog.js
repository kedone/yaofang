; (async function () {

  const yawf = window.yawf;
  const util = yawf.util;

  const ui = util.ui;
  const i18n = util.i18n;
  const css = util.css;

  const ruleset = yawf.ruleset = yawf.ruleset || {};

  i18n.configDialogTitle = {
    cn: '设置 - 药方 (YAWF)',
    tw: '設定 - 藥方 (YAWF)',
    en: 'Settings - Yet Another Weibo Filter (YAWF)',
  };

  const configDom = {};
  configDom.left = () => {
    const container = document.createElement('div');
    container.innerHTML = '<div class="WB_minitab yawf-config-header" node-type="yawf-config-header"><ul class="minitb_ul S_line1 S_bg1 clearfix"></ul></div>';
    return container.removeChild(container.firstChild);
  };
  configDom.search = () => {
    const container = document.createElement('ul');
    container.innerHTML = '<li class="minitb_item S_line1 yawf-config-tab yawf-config-tab-search"><label class="minitb_lk S_txt1"><input id="yawf-config-search" class="yawf-config-search" type="search"><span class="yawf-config-search-logo W_ficon S_txt2">f</span></label></li>';
    return container.removeChild(container.firstChild);
  };
  configDom.item = title => {
    const container = document.createElement('ul');
    container.innerHTML = '<li class="minitb_item S_line1 yawf-config-tab"><a class="minitb_lk S_txt1 S_bg1 S_bg2" action-type="tab_item" href="javascript:void(0);"></a></li>';
    const text = container.querySelector('a');
    text.textContent = title;
    return container.removeChild(container.firstChild);
  };
  configDom.right = () => {
    const container = document.createElement('div');
    container.innerHTML = '<div node-type="yawf-config-body" class="yawf-config-body yawf-window-body"></div>';
    return container.removeChild(container.firstChild);
  };
  configDom.tab = () => {
    const container = document.createElement('div');
    container.innerHTML = '<div class="searchFilterGroupLayer yawf-config-layer" node-type="searchFilterGroupLayer" style="display: none;"></div>';
    return container.removeChild(container.firstChild);
  };

  /**
   * @param {Element} inner
   */
  const render = function (inner) {
    inner.classList.add('yawf-config-inner');
    const left = inner.appendChild(configDom.left());
    const right = inner.appendChild(configDom.right());
    const tablist = left.querySelector('ul');
    const search = tablist.appendChild(configDom.search());
    /** @type {Array.<>} */
    const tabs = ruleset.tabs;
    /** @type {Element?} */
    let current = null;
    /** @type {WeakMap<Element, Element>} */
    const tabMap = new WeakMap();
    tabs.forEach(tab => {
      const tabLeft = tablist.appendChild(configDom.item(tab.name));
      const tabRight = right.appendChild(configDom.tab());
      tabMap.set(tabLeft, tabRight);
      if (!current) current = tabLeft;
    });
    const setCurrent = tabLeft => {
      if (current) {
        current.classList.remove('current');
        tabMap.get(current).classList.remove('current');
      }
      tabLeft.classList.add('current');
      const tabRight = tabMap.get(tabLeft);
      tabRight.classList.add('current');
      current = tabLeft;
    };
    // 自动选中第一个选项卡
    setCurrent(current);
    left.addEventListener('click', event => {
      const tabLeft = event.target.closest('.yawf-config-tab');
      if (!tabLeft) return;
      const tabRight = tabMap.get(tabLeft);
      if (!tabRight) return;
      setCurrent(tabLeft);
    });
  };

  ruleset.dialog = function () {
    ui.dialog({
      id: 'yawf-config',
      title: i18n.configDialogTitle,
      render,
    }).show();
  };

  css.add(`
#yawf-config .yawf-config-inner { padding: 0; width: 800px; height: 480px; }
#yawf-config .yawf-config-header { float: left; width: 160px; height: 480px; }
#yawf-config .yawf-config-header ul { height: 450px; width: 120px; overflow: hidden; padding: 20px 0 10px 40px; box-shadow: -4px 0 2px -2px rgba(64, 64, 64, 0.15) inset, 0 4px 2px -2px rgba(64, 64, 64, 0.15) inset; }
#yawf-config .yawf-config-header li { display: block; width: 120px; height: 25px; border-style: solid none; margin-top: -1px; }
#yawf-config .yawf-config-header a,
#yawf-config .yawf-config-header label { width: 100px; padding: 0 10px; position: relative; z-index: 1; }
#yawf-config .yawf-config-header .yawf-config-tab:not(.current) a { background: none transparent; }
#yawf-config .yawf-config-header .yawf-config-search { -moz-appearance: none; -webkit-appearance: none; background: none transparent; border: medium none; height: 25px; padding: 0 0 0 30px; text-align: right; width: 70px; box-sizing: content-box; position: relative; z-index: 2; }
#yawf-config .yawf-config-search-logo { clear: both; display: block; float: left; left: 45px; position: relative; top: -27px; transition: left linear 0.2s; cursor: text; font-weight: normal; }
#yawf-config .yawf-config-header li.current .yawf-config-search-logo,
#yawf-config .yawf-config-search:focus ~ .yawf-config-search-logo { left: 15px; }
#yawf-config .yawf-config-body { padding: 10px 20px 20px; width: 600px; max-height: 450px; overflow: auto; box-shadow: 0 4px 2px -2px rgba(64, 64, 64, 0.15) inset; position: relative; }
#yawf-config .yawf-config-layer { padding-bottom: 20px; min-height: 400px; }
`);

}());