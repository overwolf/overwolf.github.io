// small tooltips
// show tooltip for navigation item refer code from: https://github.com/zoltantothcom/vanilla-js-tooltip/blob/master/scripts/vanilla-js-tooltip.js

export const handleMegaToolTip = (e) => {
  const elmTarget = e.target as HTMLTextAreaElement;
  if (!elmTarget.hasAttribute('data-tooltip')) return; // don't show tooltips for elements a tooltip isn't defined for
  if (elmTarget.parentElement?.classList.contains('is-open')) return; // don't show tooltip for open elements (dropdown or menus)

  const toolTipParent = e.target as HTMLTextAreaElement;
  let position = toolTipParent.getAttribute('tooltip-position');
  const toolTipSize = toolTipParent.getAttribute('tooltip-size');

  const tooltip = document.createElement('div');
  tooltip.className = `tool-tip ${position} ${toolTipSize}`;
  tooltip.innerHTML = toolTipParent.getAttribute('data-tooltip') as string;
  document.body.appendChild(tooltip);

  let toolTipCords = toolTipParent.getBoundingClientRect(),
    left,
    top;
  const toolTipRect = tooltip.getBoundingClientRect();
  const triangleSize = 16;
  let tooltipPointerOffsetX = 0;
  let tooltipPointerOffsetY = 0;

  const windowSafeTooltipMargin = 14; // distance for the tooltip from the window's sides
  const windowRightEdge = window
    ? window.innerWidth - windowSafeTooltipMargin
    : 0;
  const windowBottomEdge = window
    ? window.innerHeight - windowSafeTooltipMargin
    : 0;

  switch (position) {
    case 'right':
      left = toolTipCords.right;
      top =
        (Number(toolTipCords.top) + Number(toolTipCords.bottom)) / 2 -
        tooltip.offsetHeight / 2;

      if (
        Number(toolTipCords.right) + tooltip.offsetWidth >
        document.documentElement.clientWidth
      ) {
        left = document.documentElement.clientWidth - tooltip.offsetWidth;
      }

      break;

    case 'left':
      left = toolTipCords.left - tooltip.offsetWidth - triangleSize;
      top =
        (Number(toolTipCords.top) + Number(toolTipCords.bottom)) / 2 -
        tooltip.offsetHeight / 2;

      break;

    case 'bottom':
      left =
        Number(toolTipCords.left) +
        (toolTipCords.width - tooltip.offsetWidth) / 2;
      top = Number(toolTipCords.bottom) + 2;

      break;

    case 'top':
      left =
        Number(toolTipCords.left) +
        (toolTipCords.width - tooltip.offsetWidth) / 2;
      top = Number(toolTipCords.top) - tooltip.offsetHeight;

      break;
  }

  const availableWidth = windowRightEdge - left; // distance from window right edge
  if (availableWidth < toolTipRect.width) {
    // when there isn't enough space for the tooltip
    tooltipPointerOffsetX = toolTipRect.width - availableWidth;
    left = left - tooltipPointerOffsetX;
  }

  const availableHeight = windowBottomEdge - top; // distance from window bottom
  if (position == 'bottom' && availableHeight < toolTipRect.height) {
    // when there isn't enough space below and the tooltip opens down
    position = 'top'; // change the tooltip to open above
    top = Number(toolTipCords.top) - tooltip.offsetHeight; // change coords for that
  }

  // when there isn't enough space below and it opens left or right
  if (
    (position == 'left' || position == 'right') &&
    availableHeight < toolTipRect.height
  ) {
    tooltipPointerOffsetY = toolTipRect.height - availableHeight;
    top = top - tooltipPointerOffsetY; // change coords for that
  }

  left = left < 0 ? Number(toolTipCords.left) : left;
  top = top < 0 ? Number(toolTipCords.bottom) : top;

  tooltip.className = `tool-tip ${position} ${toolTipSize}`; // the className determines where the triangle is pointing

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top + pageYOffset}px`;
  tooltip.style.setProperty(
    '--pointer-offset-x',
    `${tooltipPointerOffsetX - triangleSize / 2}px`,
  ); // if the tooltip is offset to one side, this changes the position of the triangle
  tooltip.style.setProperty(
    '--pointer-offset-y',
    `${tooltipPointerOffsetY - triangleSize / 2}px`,
  ); // if the tooltip is offset to one side, this changes the position of the triangle
};

// remove tooltip from dom
export const killAllTooltips = () => {
  if (document.querySelector('.tool-tip')) {
    const allStrayTooltips = document.querySelectorAll('.tool-tip');

    allStrayTooltips.forEach((toolTip) => {
      toolTip.remove();
    });
  }
};
