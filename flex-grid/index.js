module.exports = ({ gutter = '.5rem' } = {}) => (
  ({ addUtilities }) => {
    const gridUtilities = {
      '.grid': {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: `-${gutter}`,
        marginRight: `-${gutter}`,
      },
      '.grid__col': {
        paddingLeft: `${gutter}`,
        paddingRight: `${gutter}`,
      },
    };

    addUtilities(gridUtilities);
  }
);
