// src/components/ConcreteResultsSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer'; // For scroll animations
import styles from '../styles/ConcreteResultsSection.module.css';

// AnimatedNumber component for counting animation
interface AnimatedNumberProps {
  targetString: string; // e.g., "50-70 %", "100%", "0", "–50 à –70 %"
  duration: number; // Animation duration in milliseconds
  inView: boolean; // Whether the parent component is in view
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ targetString, duration, inView }) => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Define cleanTargetString here, outside useEffect, so it's in scope for the dependency array
  // Trim to handle leading/trailing spaces in the translation strings
  const cleanTargetString = targetString.trim();

  useEffect(() => {
    // If target is literally "0", just set and keep it at "0" and stop any animation efforts.
    if (cleanTargetString === "0") {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      startTimeRef.current = null;
      setDisplayValue("0");
      return;
    }

    // If not in view (and not "0" target), reset display value to "0" and stop animation.
    if (!inView) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      startTimeRef.current = null;
      setDisplayValue("0"); // Reset non-"0" targets to "0" when off-screen
      return;
    }

    // If in view and targetString is not "0", start animation.
    if (inView && cleanTargetString !== "0") {
      const getFirstNumericalPart = (str: string): number => {
        // Updated regex to explicitly match both hyphen-minus (-) and en-dash (–) for negative numbers
        const match = str.match(/^([-–]?[\d.,]+)/); 
        if (match) {
          // Remove commas and explicitly replace en-dash with standard hyphen-minus for parseFloat
          const numberPart = match[1].replace(/,/g, '').replace(/–/g, '-');
          return parseFloat(numberPart);
        }
        return 0; // Default to 0 if no valid number part is found
      };

      const getStaticSuffix = (str: string): string => {
        // Updated regex to match both hyphen-minus (-) and en-dash (–) to find the split point correctly
        const match = str.match(/^([-–]?[\d.,]+)/); 
        if (match && match[0]) {
          return str.substring(match[0].length); // Get everything after the identified numerical part
        }
        return ""; // Return empty string if no suffix or no number part found
      };

      const finalNumberToAnimateTo = getFirstNumericalPart(cleanTargetString);
      const staticSuffix = getStaticSuffix(cleanTargetString);

      // Reset startTimeRef.current to null *before* starting new animation cycle
      // This is crucial to ensure animation always starts from progress=0 when triggered by inView
      startTimeRef.current = null; 

      const animate = (currentTime: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = currentTime;
        }
        const progress = Math.min((currentTime - startTimeRef.current) / duration, 1); // Progress from 0 to 1

        const animatedNum = finalNumberToAnimateTo * progress;
        let currentDisplay = `${Math.floor(animatedNum)}`;

        // Append suffix during animation if it's not the final step
        if (staticSuffix && progress < 1) {
          currentDisplay += staticSuffix;
        } else if (progress === 1) { // When animation is complete
          currentDisplay = cleanTargetString; // Display the exact original string
        }

        setDisplayValue(currentDisplay);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
        // No explicit else needed as setDisplayValue(cleanTargetString) for progress === 1 handles final state
      };

      animationRef.current = requestAnimationFrame(animate);
    }

    // Cleanup function: stop any ongoing animation frame when component unmounts or dependencies change
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [inView, cleanTargetString, duration]); // cleanTargetString is now correctly in dependencies

  return <>{displayValue}</>;
};


// Main component: ConcreteResultsSection
export default function ConcreteResultsSection({ t_prefix }: { t_prefix: string }): JSX.Element {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
    threshold: 0.5,    // Trigger when 50% of the component is visible
  });

  // Get raw values from translations, with empty string as default for optional fields
  const badgeText = t(`${t_prefix}.badge`, { defaultValue: '' });
  const headingText = t(`${t_prefix}.title`);
  const descriptionParagraph = t(`${t_prefix}.description_paragraph`, { defaultValue: '' });
  const stat1_number_raw = t(`${t_prefix}.stat1_number`);
  const stat2_number_raw = t(`${t_prefix}.stat2_number`);
  const stat3_number_raw = t(`${t_prefix}.stat3_number`);

  return (
    <section ref={ref} className={styles.fullBleedSection}>
      <div className={styles.container}>
        <div className={styles.mainLayoutGrid}>

          <div className={styles.leftColumn}>
            {/* Conditionally render badge only if badgeText is not empty */}
            {badgeText && <span className={styles.badge}>{badgeText}</span>} 
            <h2 className={styles.heading}>{headingText}</h2>
            {/* Conditionally render description only if descriptionParagraph is not empty */}
            {descriptionParagraph && <p className={styles.description}>{descriptionParagraph}</p>}
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedNumber targetString={stat1_number_raw} duration={1500} inView={inView} />
              </span>
              <p className={styles.statText}>{t(`${t_prefix}.stat1_text`)}</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedNumber targetString={stat2_number_raw} duration={1500} inView={inView} />
              </span>
              <p className={styles.statText}>{t(`${t_prefix}.stat2_text`)}</p>
            </div>
            <div className={styles.statItem}> {/* This item will span two columns */}
              <span className={styles.statNumber}>
                <AnimatedNumber targetString={stat3_number_raw} duration={1500} inView={inView} />
              </span>
              <p className={styles.statText}>{t(`${t_prefix}.stat3_text`)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}