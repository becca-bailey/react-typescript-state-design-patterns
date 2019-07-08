import * as React from "react";
import styled from "styled-components";

interface CardImageProps {
  src: string;
  alt: string;
}

interface CardToggleProps {
  expanded?: boolean;
  onToggle(): void;
}

interface CardBodyProps {
  visible?: boolean;
}

const CardContainer = styled.div`
  background-color: #eeeeee;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-family: Roboto, sans-serif;
  padding: 1rem;
`;

const CardHeader = styled.div`
  display: flex;
`;

const CardImage = styled.img`
  max-height: 10rem;
  max-width: 10rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const CardHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StackedImagesContainer = styled.div``;

class Card extends React.Component {
  static Header: React.SFC = ({ children }) => {
    return <CardHeader data-testid="card-header">{children}</CardHeader>;
  };

  static HeaderContent: React.SFC = ({ children }) => {
    return <CardHeaderContent>{children}</CardHeaderContent>;
  };

  static Image: React.SFC<CardImageProps> = props => {
    return <CardImage {...props} />;
  };

  static StackedImages: React.SFC<{ images: CardImageProps[] }> = ({
    images
  }) => {
    return (
      <StackedImagesContainer>
        {images.map(image => (
          <Card.Image {...image} key={image.alt} />
        ))}
      </StackedImagesContainer>
    );
  };

  static Title: React.SFC = ({ children }) => {
    return (
      <h2 className="card__title" data-testid="card-title">
        {children}
      </h2>
    );
  };

  static Body: React.SFC<CardBodyProps> = ({ children, visible = true }) => {
    if (visible) {
      return (
        <div className="card__body" data-testid="card-body">
          {children}
        </div>
      );
    }
    return <React.Fragment />;
  };

  static Toggle: React.SFC<CardToggleProps> = ({ expanded, onToggle }) => {
    return (
      <button
        className="card__toggle"
        onClick={onToggle}
        data-testid="card-toggle"
      >
        {expanded ? "Close" : "Open"}
      </button>
    );
  };

  render() {
    return (
      <CardContainer data-testid="card">{this.props.children}</CardContainer>
    );
  }
}

export default Card;
