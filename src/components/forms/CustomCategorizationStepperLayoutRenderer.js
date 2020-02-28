import React, { useState } from 'react';
import { Hidden, Step, StepButton, Stepper, Button, Typography } from '@material-ui/core';
import {
  and,
  categorizationHasCategory,
  isVisible,
  optionIs,
  rankWith,
  uiTypeIs
} from '@jsonforms/core';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import { MaterialLayoutRenderer } from '@jsonforms/material-renderers';
import { makeStyles } from '@material-ui/core/styles';

export const CustomCategorizationStepperLayoutRendererTester = rankWith(
  Number.MAX_VALUE,
  and(
    uiTypeIs('Categorization'),
    categorizationHasCategory,
    optionIs('variant', 'customStepper')
  )
);
const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: 'inline-block',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    }
  }));

export const CustomCategorizationStepperLayoutRenderer =(props)=>
  {
    const classes = useStyles();
    const [activeCategory, setActiveCategory] = useState(0);
    const [completed, setCompleted] = useState({});
    const [review, setReview] = useState({});
    const [status, setStatus] = useState('IN_PROGRESS');

    const { data, path, renderers, schema, uischema, visible } = props;
    const categorization = uischema;
    const childProps = {
        elements: categorization.elements[activeCategory].elements,
        schema,
        path,
        direction: 'column',
        visible,
        renderers
    };
    const categories = categorization.elements.filter((category) => isVisible(category, data));
    const steps = categories;

    const handleStep = (step) => {
        setActiveCategory(step);
    };
    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };
    const reviewedSteps = () => {
        return Object.keys(review).length;
    };
    const isLastStep = () => {
        return activeCategory === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };
    const allStepsReviewed = () => {
        return reviewedSteps() === totalSteps();
    };

    const handleNext = () => {
        let newActiveStep = activeCategory + 1;        
        if(isLastStep() && !allStepsCompleted()){
            // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            newActiveStep = steps.findIndex((step, i) => !(i in completed));
        }
        if(isLastStep() && allStepsCompleted()){
            // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            newActiveStep = steps.findIndex((step, i) => (i in completed));
        }
        const newCompleted = completed;
        newCompleted[activeCategory] = true
        setCompleted(newCompleted);

        setActiveCategory(newActiveStep);
        
    };
    const handleNextReview = () => {
        let newActiveStep = activeCategory + 1;        
        if(isLastStep() && !allStepsReviewed()){
            // It's the last step, but not all steps have been reviewed,
            // find the first step that has been reviewed
            newActiveStep = steps.findIndex((step, i) => !(i in review));
        }
        if(isLastStep() && allStepsReviewed()){
            // It's the last step, but not all steps have been reviewed,
            // find the first step that has been reviewed
            newActiveStep = steps.findIndex((step, i) => (i in review));
            setStatus("COMPLETE");
        }
        const newReview = review;
        newReview[activeCategory] = true
        setReview(newReview);

        setActiveCategory(newActiveStep);
        setStatus("UNDER_REVIEW");
    };


    const handleBack = () => {
        setActiveCategory(prevActiveStep => prevActiveStep - 1);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeCategory] = true;
        setCompleted(newCompleted);
        handleNext();
        setStatus("REVIEW");
    };
    const handleCompleteReview = () => {
        const newReview = review;
        newReview[activeCategory] = true;
        setReview(newReview);
        handleNextReview();
        
    };

    const handleReset = () => {
        setActiveCategory(0);
        setCompleted({});
        setStatus("COMPLETE");
    };
    const handleReview = () => {
        setActiveCategory(0);
        setReview({});
        setStatus("UNDER_REVIEW");
    };

    return(
        <Hidden xsUp={!visible}>
            <Stepper activeStep={activeCategory} nonLinear alternativeLabel>
                {categories.map((e, idx) =>
                (
                    <Step key={e.label}>
                        <StepButton onClick={() => handleStep(idx)} completed={completed[idx]} >
                            {e.label}
                        </StepButton>
                    </Step>
                ))
                }
            </Stepper>
            <div>
                <MaterialLayoutRenderer {...childProps} />
            </div>
            <div>
                {allStepsCompleted() ? (
                <div>
                    <Typography className={classes.instructions}>
                    You have completed successfully. You can review your submission. Thank you.
                    </Typography>
                    <Button  className={classes.button} variant="outlined" color ="secondary" onClick={handleReset}>Re-Submit</Button>
                    <Hidden xsUp={ !(status === 'REVIEW')}>
                     <Button className={classes.button} variant="outlined" color="primary" onClick={handleReview}>Review</Button>
                    </Hidden>
                    <Hidden xsUp={ !(status === 'UNDER_REVIEW')}>
                        <Button disabled={activeCategory === 0} onClick={handleBack} className={classes.button}>
                            Back
                        </Button>  
                                               
                        {
                            activeCategory !== steps.length &&
                            (review[activeCategory] ? (
                                <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNextReview}
                                className={classes.button}
                            >
                                Next Review
                            </Button>
                            ) : (
                            <Button variant="contained" color="primary" onClick={handleCompleteReview}>
                                {reviewedSteps() === totalSteps() - 1 ? 'Complete Review' : 'Next Review'}
                            </Button>
                            ))
                        }
                    </Hidden>
                </div>
                ) : (
                <div>
                    <div>
                        <Button disabled={activeCategory === 0} onClick={handleBack} className={classes.button}>
                            Back
                        </Button>

                        {activeCategory !== steps.length &&
                            (completed[activeCategory] ? (
                                <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                Next
                            </Button>
                            ) : (
                            <Button variant="contained" color="primary" onClick={handleComplete}>
                                {completedSteps() === totalSteps() - 1 ? 'Submit' : 'Save and Continue'}
                            </Button>
                            ))}
                    </div>
                </div>
                )}
            </div>
        </Hidden>
    );
};

export default withJsonFormsLayoutProps(CustomCategorizationStepperLayoutRenderer);