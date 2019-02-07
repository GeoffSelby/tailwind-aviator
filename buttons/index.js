module.exports = () => (
  ({ addComponents, config, e}) => {
    const buttons = {
      '.button': {
        padding: '.5rem 1rem',
        fontSize: config('textSizes.base'),
        fontWeight: config('fontWeights.semibold'),
        borderRadius: config('borderRadius.default'),
        '&:hover, &:active, &:focus': {
          outline: 0,
        },
        '&.disabled, &:disabled': {
          opacity: '0.5',
          cursor: 'not-allowed',
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
      '.button.button__default': {
        backgroundColor: config('colors.grey'),
        color: config('colors.white'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.grey-dark'),
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            backgroundColor: config('colors.grey'),
          },
        },
      },
      '.button.button__primary': {
        backgroundColor: config('colors.primary'),
        color: '#ffffff',
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.primary-dark'),
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
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            backgroundColor: config('colors.grey-darkest'),
          },
        },
      },
      '.button.button__light': {
        backgroundColor: config('colors.white'),
        color: config('colors.black'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.grey-lightest'),
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            backgroundColor: config('colors.white'),
          },
        },
      },
      '.button.button__default-outline': {
        border: '1px solid',
        borderColor: config('colors.grey-darker'),
        color: config('colors.grey-darker'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.grey-darker'),
          color: config('colors.white'),
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            color: config('colors.grey-darker'),
            backgroundColor: 'transparent',
          },
        },
      },
      '.button.button__primary-outline': {
        border: '1px solid',
        borderColor: config('colors.primare'),
        color: config('colors.primary'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.primary'),
          color: config('colors.white'),
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            color: config('colors.primary'),
            backgroundColor: 'transparent',
          },
        },
      },
      '.button.button__success-outline': {
        border: '1px solid',
        borderColor: config('colors.green'),
        color: config('colors.green'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.green'),
          color: config('colors.white'),
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            color: config('colors.green'),
            backgroundColor: 'transparent',
          },
        },
      },
      '.button.button__info-outline': {
        border: '1px solid',
        borderColor: config('colors.teal'),
        color: config('colors.teal'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.teal'),
          color: config('colors.white'),
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            color: config('colors.teal'),
            backgroundColor: 'transparent',
          },
        },
      },
      '.button.button__warning-outline': {
        border: '1px solid',
        borderColor: config('colors.yellow'),
        color: config('colors.yellow'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.yellow'),
          color: config('colors.black'),
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            color: config('colors.yellow'),
            backgroundColor: 'transparent',
          },
        },
      },
      '.button.button__danger-outline': {
        border: '1px solid',
        borderColor: config('colors.red'),
        color: config('colors.red'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.red'),
          color: config('colors.white'),
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            color: config('colors.red'),
            backgroundColor: 'transparent',
          },
        },
      },
      '.button.button__dark-outline': {
        border: '1px solid',
        borderColor: config('colors.grey-darkest'),
        color: config('colors.grey-darkest'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.grey-darkest'),
          color: config('colors.white'),
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            color: config('colors.grey-darkest'),
            backgroundColor: 'transparent',
          },
        },
      },
      '.button.button__light-outline': {
        border: '1px solid',
        borderColor: config('colors.white'),
        color: config('colors.white'),
        '&:hover, &:active, &:focus': {
          backgroundColor: config('colors.white'),
          color: config('colors.black'),
        },
        '&.disabled, &:disabled': {
          '&:hover': {
            color: config('colors.white'),
            backgroundColor: 'transparent',
          },
        },
      },
    };

    addComponents(buttons);
  }
);
