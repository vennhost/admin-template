import {
  ActiveButtons,
  Add,
  BasicButtonGroup,
  BootstrapStateButtons,
  CheckBoxButtonGroup,
  DangerButton,
  DefaultButtons,
  DisabledButtons,
  DisabledOutlineButtons,
  ExtraSmallButtons,
  FlatButtonGroup,
  GradienButtons,
  InfoButton,
  SizingButtonGroup,
  LargeButtons,
  LightButton,
  OutlineButtonGroup,
  OutlineButtons,
  OutlineCustomButtonGroup,
  OutlineExtraSmallButtons,
  OutlineLargeButtons,
  OutlineSmallButtons,
  PrimaryButton,
  RadioButtonGroup,
  SecondaryButton,
  SmallButtons,
  SuccessButton,
  WarningButton,
} from "../../Constant";

export const DefaultButtonData = [
  {
    title: DefaultButtons,
    span: BootstrapStateButtons,
    btnSub: [
      {
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        colorClass: "success",
        title: SuccessButton,
      },
      {
        colorClass: "info",
        title: InfoButton,
      },
      {
        colorClass: "warning",
        title: WarningButton,
      },
      {
        colorClass: "danger",
        title: DangerButton,
      },
      {
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: "Flat Button",
    span: Add,
    code: ".btn-square",
    detail: "class for flat button",
    btnSub: [
      {
        btnClass: "btn-square",
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        btnClass: "btn-square",
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        btnClass: "btn-square",
        colorClass: "success",
        title: SuccessButton,
      },
      {
        colorClass: "info",
        title: InfoButton,
        btnClass: "btn-square",
      },
      {
        btnClass: "btn-square",
        colorClass: "warning",
        title: WarningButton,
      },
      {
        colorClass: "danger",
        title: DangerButton,
        btnClass: "btn-square",
      },
      {
        colorClass: "light",
        title: LightButton,
        btnClass: "btn-square",
      },
    ],
  },
  {
    title: "Raised with Edge buttons",
    span: Add,
    code: ".btn-pill",
    detail: "And",
    code1: ".btn-air-*",
    detail1: "class button",
    btnSub: [
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        btnClass: "btn-pill btn-air-secondary",
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        btnClass: "btn-pill btn-air-success",
        colorClass: "success",
        title: SuccessButton,
      },
      {
        colorClass: "info",
        title: InfoButton,
        btnClass: "btn-pill btn-air-info",
      },
      {
        btnClass: "btn-pill btn-air-warning",
        colorClass: "warning",
        title: WarningButton,
      },
      {
        colorClass: "danger",
        title: DangerButton,
        btnClass: "btn-pill btn-air-danger",
      },
      {
        colorClass: "light",
        title: LightButton,
        btnClass: "btn-pill btn-air-light",
      },
    ],
  },
  {
    title: "Sizing Buttons",
    span: Add,
    code: ".btn-lg",
    code1: ".btn-sm",
    code2: ".btn-xs",
    detail1:" class for Different Sizing buttons",
    btnSub: [
      {
        size: "lg",
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        size: "lg",
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        size: "lg",
        colorClass: "success",
        title: SuccessButton,
      },
      {
        size: "lg",
        colorClass: "info",
        title: InfoButton,
      },
      {
        size: "lg",
        colorClass: "warning",
        title: WarningButton,
      },
      {
        size: "lg",
        colorClass: "danger",
        title: DangerButton,
      },
      {
        size: "lg",
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: ActiveButtons,
    span: Add,
    code: ".active",
    detail: "class for active state",
    cardId: "active-btn",
    btnSub: [
      {
        active: true,
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        active: true,
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        active: true,
        colorClass: "success",
        title: SuccessButton,
      },
      {
        active: true,
        colorClass: "info",
        title: InfoButton,
      },
      {
        active: true,
        colorClass: "warning",
        title: WarningButton,
      },
      {
        active: true,
        colorClass: "danger",
        title: DangerButton,
      },
      {
        active: true,
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: DisabledButtons,
    span: Add,
    code: `.disabled class or disabled='disabled'`,
    detail: "attribute for disabled button",
    cardId: "disabled-btn",
    btnSub: [
      {
        disabled: true,
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        disabled: true,
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        disabled: true,
        colorClass: "success",
        title: SuccessButton,
      },
      {
        disabled: true,
        colorClass: "info",
        title: InfoButton,
      },
      {
        disabled: true,
        colorClass: "warning",
        title: WarningButton,
      },
      {
        disabled: true,
        colorClass: "danger",
        title: DangerButton,
      },
      {
        disabled: true,
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: OutlineButtons,
    span: Add,
    code1: `.btn-outline-*`,
    detail1: "class for border button",
    cardId: "outline-button",
    btnSub: [
      {
        outline: true,
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        outline: true,
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        outline: true,
        colorClass: "success",
        title: SuccessButton,
      },
      {
        outline: true,
        colorClass: "info",
        title: InfoButton,
      },
      {
        outline: true,
        colorClass: "warning",
        title: WarningButton,
      },
      {
        outline: true,
        colorClass: "danger",
        title: DangerButton,
      },
      {
        outline: true,
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: "bold Border outline buttons",
    span: Add,
    code: `.btn-outline-*-2x`,
    detail1: "class for bold outline",
    btnSub: [
      {
        colorClass:"deafult",
        btnClass:"btn-outline-primary-2x",
        title: PrimaryButton,
      },
      {
        btnClass:"btn-outline-secondary-2x",
        colorClass: "deafult",
        title: SecondaryButton,
      },
      {
        btnClass:"btn-outline-success-2x",
        colorClass: "deafult",
        title: SuccessButton,
      },
      {
        btnClass:"btn-outline-info-2x",
        colorClass: "deafult",
        title: InfoButton,
      },
      {
        btnClass:"btn-outline-warning-2x",
        colorClass: "deafult",
        title: WarningButton,
      },
      {
        btnClass:"btn-outline-danger-2x",
        colorClass: "deafult",
        title: DangerButton,
      },
      {
        btnClass:"btn-outline-light-2x",
        colorClass: "deafult",
        title: LightButton,
      },
    ],
  },

  {
    title: GradienButtons,
    span: Add,
    code1: `.btn-*-gradien`,
    detail1: "class for gradien button",
    cardId: "gradiant",
    btnSub: [
      {
        colorClass: "primary-gradien",
        title: PrimaryButton,
      },
      {
        colorClass: "secondary-gradien",
        title: SecondaryButton,
      },
      {
        colorClass: "success-gradien",
        title: SuccessButton,
      },
      {
        colorClass: "info-gradien",
        title: InfoButton,
      },
      {
        colorClass: "warning-gradien",
        title: WarningButton,
      },
      {
        colorClass: "danger-gradien",
        title: DangerButton,
      },
   
    ],
  },
];

export const GroupBtnData = [
  {
    title: BasicButtonGroup,
    para: ".btn-group-pill",
    desc: "Edges button.",
    color: [
      {
        colorClass: "primary",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        colorClass: "secondary",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        colorClass: "success",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        colorClass: "info",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        colorClass: "warning",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        colorClass: "danger",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        colorClass: "light",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        colClass: "Button-group-mb-sm",
        colorClass: "dark",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
    ],
  },
  {
    title: FlatButtonGroup,
    para: ".btn-group-square",
    desc: "Flat button.",
    color: [
      {
        btnClass: "btn-group-square",
        colorClass: "primary",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        btnClass: "btn-group-square",
        colorClass: "secondary",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        btnClass: "btn-group-square",
        colorClass: "success",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        btnClass: "btn-group-square",
        colorClass: "info",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        btnClass: "btn-group-square",
        colorClass: "warning",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        btnClass: "btn-group-square",
        colorClass: "danger",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        btnClass: "btn-group-square",
        colorClass: "light",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        btnClass: "btn-group-square",
        colClass: "button-group-mb-sm xl-50",
        colorClass: "dark",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        btnClass: "btn-group-square",
        colorClass: "info",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
    ],
  },
  {
    title: SizingButtonGroup,
    para: ".btn-lg , .btn-sm",
    desc: "Sizing buttons.",
    color: [
      {
        size: "sm",
        colorClass: "primary",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        size: "sm",
        colorClass: "secondary",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        size: "sm",
        colorClass: "success",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        size: "sm",
        colorClass: "info",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        size: "sm",
        colorClass: "warning",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        size: "sm",
        colorClass: "danger",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        size: "sm",
        colorClass: "light",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
      {
        size: "sm",
        colClass: "button-group-mb-sm xl-50",
        colorClass: "dark",
        title1: "Left",
        title2: "Middle",
        title3: "Right",
      },
    ],
  },
  {
    title: OutlineCustomButtonGroup,
    color: [
      {
        colorClass: "primary",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: false,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "secondary",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: false,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "success",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: false,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "info",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: false,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "warning",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: false,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "danger",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: false,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "light",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: false,
        title3: "Right",
        outline3: true,
      },
      {
        colClass: "button-group-mb-sm xl-50",
        colorClass: "dark",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: false,
        title3: "Right",
        outline3: true,
      },
    ],
  },
  {
    title: OutlineButtonGroup,
    color: [
      {
        colorClass: "primary",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: true,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "secondary",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: true,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "success",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: true,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "info",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: true,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "warning",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: true,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "danger",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: true,
        title3: "Right",
        outline3: true,
      },
      {
        colorClass: "light",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: true,
        title3: "Right",
        outline3: true,
      },
      {
        colClass: "button-group-mb-sm xl-50",
        colorClass: "dark",
        btnClass: "btn-group-pill",
        title1: "Left",
        outline1: true,
        title2: "Middle",
        outline2: true,
        title3: "Right",
        outline3: true,
      },
    ],
  },
];

export const RadioBtnData = [
  {
    title: RadioButtonGroup,
    span: Add,
    code1: ".active",
    detail1: "for active state and",
    code2: ".disabled",
    detail2: "class or",
    code3: `disabled='disabled'`,
    detail3: "attribute",
    btnSub: [
      {
        btnClass: "btn-radio",
        colorClass: "primary",
        divClass: "radio radio-primary",
        id1: "radio7",
        title1: "Option 1",
        id2: "radio8",
        title2: "Option 2",
      },
      {
        btnClass: "btn-radio",
        colorClass: "secondary",
        divClass: "radio radio-secondary",
        id1: "radio11",
        title1: "Option 1",
        id2: "radio12",
        title2: "Option 2",
      },
      {
        btnClass: "btn-radio",
        colorClass: "success",
        divClass: "radio radio-success",
        id1: "radio13",
        title1: "Option 1",
        id2: "radio14",
        title2: "Option 2",
      },
      {
        btnClass: "btn-radio",
        colorClass: "info",
        divClass: "radio radio-info",
        id1: "radio15",
        title1: "Option 1",
        id2: "radio16",
        title2: "Option 2",
      },
      {
        btnClass: "btn-radio",
        colorClass: "warning",
        divClass: "radio radio-warning",
        id1: "radio17",
        title1: "Option 1",
        id2: "radio18",
        title2: "Option 2",
      },
      {
        btnClass: "btn-radio",
        colorClass: "danger",
        divClass: "radio radio-danger",
        id1: "radio20",
        title1: "Option 1",
        id2: "radio22",
        title2: "Option 2",
      },
      {
        colClass: "button-group-mb-sm xl-50",
        btnClass: "btn-radio",
        colorClass: "light txt-dark",
        divClass: "radio radio-light",
        id1: "radio23",
        title1: "Option 1",
        id2: "radio24",
        title2: "Option 2",
      },
    ],
  },
  {
    title: CheckBoxButtonGroup,
    span: Add,
    code1: ".active",
    detail1: "for active state and",
    code2: ".disabled",
    detail2: "class or",
    code3: `disabled='disabled'`,
    detail3: "attribute",
    btnSub: [
      {
        btnClass: "btn-option",
        colorClass: "primary",
        divClass: "checkbox checkbox-primary",
        id1: "checkbox-primary-1",
        title1: "Option 1",
        id2: "checkbox-primary-2",
        title2: "Option 2",
        checkBox: true,
      },
      {
        btnClass: "btn-group btn-option",
        colorClass: "secondary",
        divClass: "checkbox checkbox-secondary",
        id1: "checkbox-primary-3",
        title1: "Option 1",
        id2: "checkbox-primary-4",
        title2: "Option 2",
        checkBox: true,
      },
      {
        btnClass: "btn-group btn-option",
        colorClass: "success",
        divClass: "checkbox checkbox-success",
        id1: "checkbox-primary-5",
        title1: "Option 1",
        id2: "checkbox-primary-6",
        title2: "Option 2",
        checkBox: true,
      },
      {
        btnClass: "btn-group btn-option",
        colorClass: "info",
        divClass: "checkbox checkbox-info",
        id1: "checkbox-primary-7",
        title1: "Option 1",
        id2: "checkbox-primary-8",
        title2: "Option 2",
        checkBox: true,
      },
      {
        btnClass: "btn-group btn-option",
        colorClass: "warning",
        divClass: "checkbox checkbox-warning",
        id1: "checkbox-primary-9",
        title1: "Option 1",
        id2: "checkbox-primary-10",
        title2: "Option 2",
        checkBox: true,
      },
      {
        btnClass: "btn-group btn-option",
        colorClass: "danger",
        divClass: "checkbox checkbox-danger",
        id1: "checkbox-danger-11",
        title1: "Option 1",
        id2: "checkbox-danger-12",
        title2: "Option 2",
        checkBox: true,
      },
      {
        colClass: "button-group-mb-sm",
        btnClass: "btn-group btn-option",
        colorClass: "light txt-dark",
        divClass: "checkbox checkbox-light",
        id1: "checkbox-light-13",
        title1: "Option 1",
        id2: "checkbox-light-14",
        title2: "Option 2",
        checkBox: true,
      },
    ],
  },
];

export const RaisedButtonData = [
  {
    title: DefaultButtons,
    span: "Add",
    code: `.btn-pill & .btn-air-*`,
    detail: "class  for raised button",
    btnSub: [
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "success",
        title: SuccessButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "info",
        title: InfoButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "warning",
        title: WarningButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "danger",
        title: DangerButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: LargeButtons,
    span: "Add",
    code: `.btn-square & .btn-lg`,
    detail: "class for large button",
    btnSub: [
      {
        size: "lg",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        size: "lg",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        size: "lg",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "success",
        title: SuccessButton,
      },
      {
        size: "lg",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "info",
        title: InfoButton,
      },
      {
        size: "lg",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "warning",
        title: WarningButton,
      },
      {
        size: "lg",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "danger",
        title: DangerButton,
      },
      {
        size: "lg",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: SmallButtons,
    span: "Add",
    code: `.btn-square & .btn-sm`,
    detail: "class for small button",
    btnSub: [
      {
        size: "sm",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        size: "sm",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        size: "sm",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "success",
        title: SuccessButton,
      },
      {
        size: "sm",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "info",
        title: InfoButton,
      },
      {
        size: "sm",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "warning",
        title: WarningButton,
      },
      {
        size: "sm",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "danger",
        title: DangerButton,
      },
      {
        size: "sm",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: ExtraSmallButtons,
    span: "Add",
    code: `.btn-square & .btn-xs`,
    detail: "class for extra small button",
    btnSub: [
      {
        size: "xs",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        size: "xs",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        size: "xs",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "success",
        title: SuccessButton,
      },
      {
        size: "xs",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "info",
        title: InfoButton,
      },
      {
        size: "xs",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "warning",
        title: WarningButton,
      },
      {
        size: "xs",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "danger",
        title: DangerButton,
      },
      {
        size: "xs",
        btnClass: "btn-pill btn-air-primary",
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: ActiveButtons,
    span: "Add",
    code: `.active`,
    detail: "for active state",
    btnSub: [
      {
        active: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        active: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        active: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "success",
        title: SuccessButton,
      },
      {
        active: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "info",
        title: InfoButton,
      },
      {
        active: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "warning",
        title: WarningButton,
      },
      {
        active: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "danger",
        title: DangerButton,
      },
      {
        active: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: DisabledButtons,
    span: "Add",
    code: `.disabled || disabled='disabled'`,
    detail: "attribute for disabled button",
    btnSub: [
      {
        disabled: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        disabled: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        disabled: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "success",
        title: SuccessButton,
      },
      {
        disabled: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "info",
        title: InfoButton,
      },
      {
        disabled: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "warning",
        title: WarningButton,
      },
      {
        disabled: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "danger",
        title: DangerButton,
      },
      {
        disabled: true,
        btnClass: "btn-pill btn-air-primary",
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: OutlineButtons,
    span: Add,
    code1: `.btn-square & .btn-outline-*`,
    detail1: "class for button with outline",
    btnSub: [
      {
        btnClass: "btn-pill btn-air-primary",
        outline: true,
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        outline: true,
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        outline: true,
        colorClass: "success",
        title: SuccessButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        outline: true,
        colorClass: "info",
        title: InfoButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        outline: true,
        colorClass: "warning",
        title: WarningButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        outline: true,
        colorClass: "danger",
        title: DangerButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        outline: true,
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: OutlineLargeButtons,
    span: Add,
    code1: `.btn-outline-*`,
    detail1: "class for outline and",
    code2: ".btn-lg",
    detail2: "class for large button",
    cardId: "outline-bold-button",
    btnSub: [
      {
        btnClass: "btn-pill btn-air-primary",
        size: "lg",
        outline: true,
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "lg",
        outline: true,
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "lg",
        outline: true,
        colorClass: "success",
        title: SuccessButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "lg",
        outline: true,
        colorClass: "info",
        title: InfoButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "lg",
        outline: true,
        colorClass: "warning",
        title: WarningButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "lg",
        outline: true,
        colorClass: "danger",
        title: DangerButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "lg",
        outline: true,
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: OutlineSmallButtons,
    span: Add,
    code1: `.btn-outline-*`,
    detail1: "class for outline and",
    code2: ".btn-sm",
    detail2: "class for small button",
    cardId: "outline-small-button",
    btnSub: [
      {
        btnClass: "btn-pill btn-air-primary",
        size: "sm",
        outline: true,
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "sm",
        outline: true,
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "sm",
        outline: true,
        colorClass: "success",
        title: SuccessButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "sm",
        outline: true,
        colorClass: "info",
        title: InfoButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "sm",
        outline: true,
        colorClass: "warning",
        title: WarningButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "sm",
        outline: true,
        colorClass: "danger",
        title: DangerButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "sm",
        outline: true,
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: OutlineExtraSmallButtons,
    span: Add,
    code1: `.btn-outline-*`,
    detail1: "class for outline and",
    code2: ".btn-xs",
    detail2: "class for extra small button",
    cardId: "ex-outline-small-button",
    btnSub: [
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        colorClass: "success",
        title: SuccessButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        colorClass: "info",
        title: InfoButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        colorClass: "warning",
        title: WarningButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        colorClass: "danger",
        title: DangerButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: DisabledOutlineButtons,
    span: Add,
    code1: `.disabled`,
    detail1: "class or",
    code2: `disabled='disabled'}`,
    detail2: "attribute for disabled state",
    cardId: "ex-outline-small-button",
    btnSub: [
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        disabled: true,
        colorClass: "primary",
        title: PrimaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        disabled: true,
        colorClass: "secondary",
        title: SecondaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        disabled: true,
        colorClass: "success",
        title: SuccessButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        disabled: true,
        colorClass: "info",
        title: InfoButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        disabled: true,
        colorClass: "warning",
        title: WarningButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        disabled: true,
        colorClass: "danger",
        title: DangerButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        size: "xs",
        outline: true,
        disabled: true,
        colorClass: "light",
        title: LightButton,
      },
    ],
  },
  {
    title: GradienButtons,
    span: Add,
    code1: `.btn-*-gradien`,
    detail1: "class for gradien button",
    cardId: "gradiant",
    btnSub: [
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "primary-gradien",
        title: PrimaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "secondary-gradien",
        title: SecondaryButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "success-gradien",
        title: SuccessButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "info-gradien",
        title: InfoButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "warning-gradien",
        title: WarningButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "danger-gradien",
        title: DangerButton,
      },
      {
        btnClass: "btn-pill btn-air-primary",
        colorClass: "light-gradien",
        title: LightButton,
      },
    ],
  },
];
