import React, { useEffect } from 'react';

const withCursor = (WrappedComponent) => {
  return class WithCursor extends React.Component {
    componentDidMount() {
      this.setupCursor();
    }

    componentWillUnmount() {
      this.cleanupCursor();
    }

    setupCursor() {
      const textElements = document.querySelectorAll('.text_s'); // Change the selector to match your text elements
      const cursor = document.querySelector('.cursor');

      const animateIt = function (e) {
        const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
          move = 25,
          xMove = (x / width) * (move * 2) - move,
          yMove = (y / height) * (move * 2) - move;

        this.style.transform = `translate(${xMove}px, ${yMove}px)`;
        cursor.style.transform = `scale(8)`;

        if (e.type === 'mouseleave') { this.style.transform = '' ;
        cursor.style.transform = ``;
        }
      };

      const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        const rect = cursor.getBoundingClientRect();
        cursor.style.left = x - rect.width / 2 + 'px';
        cursor.style.top = y - rect.height / 2 + 'px';
      };

      textElements.forEach((elem) => {
        elem.addEventListener('mousemove', animateIt);
        elem.addEventListener('mouseleave', animateIt);
      });

      window.addEventListener('mousemove', editCursor);

      this.textElements = textElements;
      this.cursor = cursor;
    }

    cleanupCursor() {
      this.textElements.forEach((elem) => {
        elem.removeEventListener('mousemove', this.animateIt);
        elem.removeEventListener('mouseleave', this.animateIt);
      });

      window.removeEventListener('mousemove', this.editCursor);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withCursor;
