import { Avatar, Card as MaterialCard, CardContent } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";

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

const useStyles = makeStyles({
  cardHeader: {
    position: "relative",
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    width: 100,
    height: 100,
    position: "relative",
    border: "2px solid white"
  },
  stackedAvatarContainer: {
    display: "inline-flex"
  },
  expandButton: {
    border: 0,
    backgroundColor: "none",
    position: "absolute",
    bottom: 10,
    right: 10,
    cursor: "pointer",
    "&:focus": {
      outline: 0
    }
  }
});

class Card extends React.Component {
  static Header: React.SFC = ({ children }) => {
    const classes = useStyles();
    return (
      <CardContent className={classes.cardHeader} data-testid="card-header">
        {children}
      </CardContent>
    );
  };

  static HeaderContent: React.SFC = ({ children }) => {
    return <CardContent>{children}</CardContent>;
  };

  static Image: React.SFC<CardImageProps> = props => {
    const classes = useStyles();
    return <Avatar {...props} className={classes.avatar} />;
  };

  static StackedImages: React.SFC<{ images: CardImageProps[] }> = ({
    images
  }) => {
    const classes = useStyles();
    return (
      <div className={classes.stackedAvatarContainer}>
        {images.map((image, i) => (
          <Avatar
            {...image}
            className={classes.avatar}
            key={image.alt}
            style={i > 0 ? { marginLeft: "-60px" } : {}}
          />
        ))}
      </div>
    );
  };

  static Title: React.SFC = ({ children }) => {
    return <h2 data-testid="card-title">{children}</h2>;
  };

  static Body: React.SFC<CardBodyProps> = ({ children, visible = true }) => {
    return (
      <React.Fragment>
        {visible && (
          <CardContent data-testid="card-body">{children}</CardContent>
        )}
      </React.Fragment>
    );
  };

  static Toggle: React.SFC<CardToggleProps> = ({ expanded, onToggle }) => {
    const classes = useStyles();
    return (
      <button
        className={classes.expandButton}
        onClick={onToggle}
        data-testid="card-toggle"
      >
        {expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </button>
    );
  };

  render() {
    return (
      <MaterialCard data-testid="card">{this.props.children}</MaterialCard>
    );
  }
}

export default Card;
