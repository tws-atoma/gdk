import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { GdkComponentTitle } from './gdk-component-title.interface';

@Component({
  tag: 'gdk-component',
  styleUrl: 'gdk-component.scss',
  shadow: true
})
export class GdkComponent {
  /**
   * The title
   */
  @Prop() title: GdkComponentTitle = GdkComponentTitle.MR;

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The component styles {object}
   */
  @Prop() styles: { [key: string]: string; };

  private getText(): string {
    return format(this.title, this.first, this.last);
  }

  render() {
    const rootClasses = {
      ['gdk-component']: true
    }
    const props = {
      style: this.styles,
      class: rootClasses
    }

    return <div {...props}>Hello, World! I'm {this.getText()}</div>;
  }
}