import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import styles from "./styles/NewPaletteFormStyles";
import DraggableColoBox from './DraggableColorBox';
import seedColors from "./seedColors";
import { ChromePicker } from "react-color";

class NewPaletteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            colors: seedColors[0].colors
        };
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, maxColors, palettes } = this.props;
        const { open, colors } = this.state;

        return (
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='left'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <div className={classes.container}>
                        <Typography variant='h4'>
                            Design Your Palette
            </Typography>
                        <div className={classes.buttons}>
                            <Button
                                variant='contained'
                                color='secondary'
                                onClick={this.clearColors}
                                className={classes.button}
                            >
                                Clear Palette
              </Button>
                            <Button
                                variant='contained'
                                className={classes.button}
                                color='primary'
                            >
                                Random Color
              </Button>
                        </div>
                        <ChromePicker
                            colors={colors}
                        />
                        <Button
                            variant='contained'
                            color='primary'
                        >
                            Add Color
              </Button>
                    </div>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open
                    })}
                >
                    <div className={classes.drawerHeader} />
                    {this.state.colors.map(color => (
                        <DraggableColoBox color={color} />
                    ))}
                </main>
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);