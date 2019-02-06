module.exports = () => (
  ({ addComponents, config, e}) => {
    const buttons = {
      '.button': {
        padding: '.5rem 1rem',
        fontSize: config('textSizes.base'),
        backgroundColor: config('colors.grey-lighter'),
        color: config('colors.black'),
        borderRadius: config('borderRadius.default'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.grey-light'),
          outline: 0,
        },
        '&.disabled, &:disabled': {
          opacity: '0.5',
          cursor: 'not-allowed',
          '&:hover': {
            backgroundColor: config('colors.grey-lighter'),
          },
        },
      },
      '.button.button__small': {
        fontSize: config('textSizes.xs'),
      },
      '.button.button__large': {
        fontSize: config('textSizes.xl'),
      },
      '.button.button__block': {
        display: 'block',
        width: '100%',
      },
      '.button.button__primary': {
        backgroundColor: config('colors.primary'),
        color: '#ffffff',
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.primary-dark'),
          outline: 0,
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            backgroundColor: config('colors.primary'),
          },
        },
      },
      '.button.button__success': {
        backgroundColor: config('colors.green'),
        color: '#ffffff',
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.green-dark'),
          outline: 0,
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            backgroundColor: config('colors.green'),
          },
        },
      },
      '.button.button__info': {
        backgroundColor: config('colors.teal'),
        color: '#fff',
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.teal-dark'),
          outline: 0,
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            backgroundColor: config('colors.teal'),
          },
        },
      },
      '.button.button__warning': {
        backgroundColor: config('colors.yellow'),
        color: config('colors.black'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.yellow-dark'),
          outline: 0,
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            backgroundColor: config('colors.yellow'),
          },
        },
      },
      '.button.button__danger': {
        backgroundColor: config('colors.red'),
        color: '#ffffff',
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.red-dark'),
          outline: 0,
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            backgroundColor: config('colors.red'),
          },
        },
      },
      '.button.button__dark': {
        backgroundColor: config('colors.grey-darkest'),
        color: '#ffffff',
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.black'),
          outline: 0,
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            backgroundColor: config('colors.grey-darkest'),
          },
        },
      },
    };

    addComponents(buttons);
  }
);
