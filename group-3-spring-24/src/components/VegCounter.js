import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementPlant, decrementPlant, resetPlants } from '../redux/counterSlice';
import buttonImage from '../assets/buttonImage.jpg';

function VegCounter() {
  const plantCount = useSelector(state => state.plantCounter.plantCount);
  const dispatch = useDispatch();

  const overLayStyle = {
    width: '482px', height: '345px',
    backgroundSize: 'cover',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundImage: 'url(' + buttonImage + ')'
  };


  const getMessage = () => {
        if (plantCount === 0) {
          return <p><b>Use the counter to track the number of plants you eat in a week. We hope the fun facts will support your motivation!</b></p>;
        }else if (plantCount === 1) {
          return <p>A journey of 30 plants a week starts with a single bite! </p>;
        }else if (plantCount === 2) {
          return <p>Trillions of microorganisms live in every humans gut - these organisms are helpful to human health as they help break down food, manufacture vitamins and support the immune system (source Australian Academy of Science)</p>;
        }else if (plantCount === 3) {
          return <p>Approximately 90% of the bodies serotonin (which plays an important role in mood) is made by the gut bacteria that you are supporting with your healthy diet! (Source Microba)</p>;
        }else if (plantCount === 4) {
          return <p>Healthy gut bacteria is thought to support good mental and physical health!(source Australian Academy of Science)</p>;
        }else if (plantCount === 5) {
          return <p>Your gut bacteria will thrive on all the fibre from the plants!</p>;
        }else if (plantCount === 6) {
          return <p>Coffee counts as 1 - another reason to enjoy a good cup of coffee! </p>;
        }else if (plantCount === 7) {
          return <p>Chocolate which is 70% cocoa or more counts towards you goal - so enjoy a good quality and suprisingly healthy treat!</p>;
        }else if (plantCount === 8) {
          return <p>If you want a snack - popcorn counts as one of your plants! </p>;
        }else if (plantCount === 9) {
          return <p>Even a small pinch of herbs or spices counts towards your goal!</p>;
        }else if (plantCount === 10) {
          return <p>Why not add a pinch of cinnamon or maybe some nuts and seeds to your morning porridge? This will boost your plant intake!</p>;
        }else if (plantCount === 11) {
          return <p>Different coloured fruits and vegetables can contain slightly different nutrients - so red grapes and green grapes count as 2!</p>;
        }else if (plantCount === 12) {
          return <p>Adding garlic to your food might not only enhance the flavour - it counts towards your plant goal! </p>;
        }else if (plantCount === 13) {
          return <p>A small basil leaf in your pasta sauce or with a tomoato salad is a tasty way of building towards your 30!</p>;
        }else if (plantCount === 14) {
          return <p>Bell peppers come in various colors and each counts as a different plant! Try red, yellow, and green for a colorful meal.</p>;
        } else if (plantCount === 15) {
          return <p>Try adding a handful of spinach to your smoothie - you won't even taste it, but your body will thank you!</p>;
        } else if (plantCount === 16) {
          return <p>Congratulations - you are over half way there! keep going and reach your goal of 30 different plants a week!</p>;
        } else if (plantCount === 17) {
          return <p>Avocado on toast is not only delicious but also adds to your plant count. Don't forget to sprinkle some seeds on top!</p>;
        } else if (plantCount === 18) {
          return <p>Add some berries to your breakfast cereal or yogurt. Each type of berry counts separately!</p>;
        } else if (plantCount === 19) {
          return <p>Sweet potatoes and regular potatoes count as different plants. Try incorporating both into your meals!</p>;
        } else if (plantCount === 20) {
          return <p>20 plants! Amazing progress! Try adding lentils to your soups or salads for an extra plant boost.</p>;
        } else if (plantCount === 21) {
          return <p>Chia seeds and flax seeds are tiny but mighty. Add them to your oatmeal or smoothies for a healthy boost.</p>;
        } else if (plantCount === 22) {
          return <p>Fermented foods like sauerkraut and kimchi are great for gut health and count towards your plant goal!</p>;
        } else if (plantCount === 23) {
          return <p>Try using different types of lettuce in your salads. Romaine, arugula, and butter lettuce all count as different plants!</p>;
        } else if (plantCount === 24) {
          return <p>Mushrooms are a versatile ingredient and count towards your plant goal. Try adding them to your dishes.</p>;
        } else if (plantCount === 25) {
          return <p>Add slices of cucumber and bell pepper to your sandwiches for a crunchy and nutritious boost.</p>;
        } else if (plantCount === 26) {
          return <p>Use fresh herbs like cilantro, parsley, and dill to add flavor to your dishes. They all count towards your goal!</p>;
        } else if (plantCount === 27) {
          return <p>Experiment with different types of beans. Black beans, kidney beans, and chickpeas all count as different plants!</p>;
        } else if (plantCount === 28) {
          return <p>Green peas are a great addition to many dishes and count towards your plant goal. Add them to pasta, rice, or salads!</p>;
        } else if (plantCount === 29) {
          return <p>Don't forget about root vegetables like carrots, beets, and parsnips. They add color and nutrition to your meals.</p>;
        } else if (plantCount === 30) {
            return <p>Congratulations! You've reached 30 plants. Keep up the great work and continue exploring new plant-based foods!</p>;
        } else if (plantCount >= 31) {
          return <p>Check out these sources for more information on gut health:
          <a href="https://www.science.org.au/curious/people-medicine/gut-bacteria"> Gut Bacteria </a> 
          and 
          <a href="https://insight.microba.com/blog/the-important-role-of-serotonin-in-your-gut/"> The Role of Serotonin in Your Gut</a>.
          </p>;
    }
   };

  return (
          <>
          <h3>Plant tracker</h3>
          <div className="image-container my-5">
            <div style={overLayStyle} src={buttonImage} alt="happy tummy" className="tummy" >
              <div className="counter-overlay">
                <h2 id="CountNumber">{plantCount}</h2>
              </div>
            </div>

            <p>{getMessage()}</p>
            
            <button className="btn btn-info mx-3" id="vegetables" onClick={() => dispatch(incrementPlant())}>Vegetable</button>
            <button className="btn btn-info mx-3" onClick={() => dispatch(incrementPlant())}>Fruit</button>
            <button className="btn btn-info mx-3" onClick={() => dispatch(incrementPlant())}>Nuts/Seed</button>
            <button className="btn btn-info mx-3" onClick={() => dispatch(incrementPlant())}>Legumes</button>
            <button className="btn btn-info mx-3" onClick={() => dispatch(incrementPlant())}>Herbs/Spices</button>
            <button className="btn btn-info mx-3" onClick={() => dispatch(incrementPlant())}>Wholegrains</button>
            <button className="remove-plant" onClick={() => dispatch(decrementPlant())} disabled={plantCount === 0} >Remove plant</button>
            <button className="reset-counter" onClick={() => dispatch(resetPlants())}>Reset counter</button>
          </div>
        </>
  );
}

export default VegCounter;