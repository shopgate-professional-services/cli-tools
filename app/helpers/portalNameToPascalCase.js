/**
 * Converts PORTAL_POSITION into PortalPosition
 * @param {string} portalName Portala position name.
 * @returns {string}
 */
function portalNameToPascalCase(portalName) {
  return portalName.replace(/-/g, '.').split('.').map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join('');
}

module.exports = portalNameToPascalCase;
