import styled from 'styled-components';
import { Button as Btn, ButtonProps as BtnProps } from 'react-bootstrap';
import lightTheme from './../../themes/light';

export interface ButtonProps extends BtnProps {
  variant: 'primary' | 'secondary' | 'link';
  disabled: boolean;
}

const Button = styled(Btn)`
  display: flex;
  align-items: center;
  padding: 11px 16px;
  border-radius: 4px;
  width: max-content;
  &.btn-primary {
    background: linear-gradient(
      180deg,
      ${(props) => props.theme.colors.red.primary} 0%,
      ${(props) => props.theme.colors.red.secondary} 100%
    );
    border: 1px solid transparent;
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.white.neutral1};

    &:disabled {
      background: ${(props) => props.theme.colors.white.neutral5};
      border: 1px solid ${(props) => props.theme.colors.white.neutral5};
      color: ${(props) => props.theme.colors.white.neutral6};
    }
  }

  &.btn-secondary {
    background: ${(props) => props.theme.colors.white.neutral1};
    border: 1px solid ${(props) => props.theme.colors.red.primary};
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.blue.dark};

    &:disabled {
      background: ${(props) => props.theme.colors.white.neutral5};
      border: 1px solid ${(props) => props.theme.colors.white.neutral5};
      color: ${(props) => props.theme.colors.white.neutral6};
    }
  }

  &.btn-link {
    text-decoration: unset;
    color: ${(props) => props.theme.colors.red.primary};

    &:disabled {
      color: ${(props) => props.theme.colors.white.neutral6};
    }
  }

  @media (hover: hover) {
    &.btn-primary {
      &:hover {
        background: linear-gradient(
          180deg,
          ${(props) => props.theme.colors.red.primary} 0%,
          ${(props) => props.theme.colors.red.secondary} 100%
        );
        border: 1px solid transparent;
        color: ${(props) => props.theme.colors.white.neutral1};
      }
    }

    &.btn-secondary {
      &:hover {
        background: ${(props) => props.theme.colors.blue.lightest};
        border: 1px solid transparent;
        color: ${(props) => props.theme.colors.blue.darker};
      }
    }
    &.btn-link {
      &:hover {
        color: ${(props) => props.theme.colors.blue.dark};
      }
    }
  }
`;

export default Button;
