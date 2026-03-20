## Code Review Exercise

Below are few of the findings on executing and reviewing code - Scottish Fold

### Semantic corrections :

Curerntly the data in Cat Facts section of Index.html does list the facts using paragraph and span element over lists. On making use of ul and list within the div it helps the users with assistive technology for accessing the page better.

- Existing code :

```
<div id="CatFacts" class="content-container">
      <h1>Cat Facts</h1>
      <div>
        <p class="cat-fact-list-item">
          <span class="bullet-point"></span>They all have one common ancestor: Susie
        </p>
        <p class="cat-fact-list-item">
          <span class="bullet-point"></span>The fold is due to a mutation
        </p>
        ....
      </div>
    </div>
```

- Updated code :

```
<div id="CatFacts" class="content-container">
      <h1>Cat Facts</h1>
       <ul>
        <li> They all have one common ancestor: Susie</li>
        <li> The fold is due to a mutation</li>
        ....
       <ul>
    </div>
```

### Accessibility adjustment :

1. The usage of span isn't a right fit for email and password fields in the form, it would be a best practice to use label and for attributes when we have input field being used. Similar to the next section of the code (checkboxes - breeds section)

- Existing code :

```
<div
          class="space-between-distributed-row-container vertically-stacked-sm-screen-container">
          <p class="label-input-group form-element-container">
            <span class="form-label">Email</span>
            <input
              aria-label="email"
              class="form-input-box"
              type="email"
              id="email"
              name="email"
            />
          </p>
</div>
```

- Updated code :

```
<label for="userName">Name</label>
<input type="text" id="userName" name="name" class="form-control" />
```

2. Usage of anchor tag without a link, sounds semantically incorrect. As anchor tags expects a href for link value to redirect to a different page. If the requirement isn't as mentioned earlier then using a button option would be much better fit for this section.

- Existing code :

`<a class="more-info-button">More Info</a>`

- Updated code :

`<a class="more-info" href="moreinfo.html">More Info</a>`

or

`<button class="more-info-button" type="button">More Info</button>`

### Data efficency

1. I noticed that the mobile view isn't showing any images under characteristics, on checking further I see under css the display has been made none, it would be good to resize over eliminating the images completely.

- Exsisting code :

```
@media screen and (max-width: 767px) {
  .vertically-stacked-sm-screen-container {
    flex-direction: column;
  }

  .characteristics-image {
    display: none;
  }
}
```

- Updated code :

```
.characteristics-image {
    width: 50px;
    height: 50px;
}
```

2. Checkbox code doesn't seem to have the fieldset and legend values setup rather it's been listed under paragraph, this needs correctign to group it better.

- Existing code :

```
<div class="form-fieldset form-element-container">
          <p class="form-label">What breeds would you like to learn?</p>
          <div>
            <input type="checkbox" id="siamese" name="breed1" value="siamese" />
            <label for="siamese">Siamese Cat</label>
          </div>
</div>
```

- Updated code :

```
<fieldset>
    <legend>What breeds would you like to learn?</legend>
    ....
</fieldset>
```

### Functionality failure :

Currently the submit and reset buttons are non operatable, they are out of the form block which would cause a functionality failure if not adjusted.

* Existing code :

```
<form id="RequestInfo" class="content-container form">
        <h1>Tell us what you want to learn more</h1>
        <div
          class="space-between-distributed-row-container vertically-stacked-sm-screen-container"
        >
          <p class="label-input-group form-element-container">
            <span class="form-label">Name</span>
            <input
              aria-label="name"
              class="form-input-box"
              type="text"
              id="name"
              name="name"
            />
          </p>
   </form>
      <div
        class="form space-evenly-distributed-row-container form-buttons-container"
      >
        <input class="form-button" type="submit" value="submit" />
        <input class="form-button" type="reset" value="reset" />
      </div>
```

* Updated code :

```
<form id="RequestInfo" class="content-container form">
        <h1>Tell us what you want to learn more</h1>
        <div
          class="space-between-distributed-row-container vertically-stacked-sm-screen-container"
        >
          <p class="label-input-group form-element-container">
            <span class="form-label">Name</span>
            <input
              aria-label="name"
              class="form-input-box"
              type="text"
              id="name"
              name="name"
            />
          </p>
          <div
        class="form space-evenly-distributed-row-container form-buttons-container"
      >
        <input class="form-button" type="submit" value="submit" />
        <input class="form-button" type="reset" value="reset" />
      </div>
   </form>
```

### Naming Convention 

The naming convention for the classes within the checkboxes is inconsistent, so while grouping the name should be same. If we notice starting 1 to 6 each of the breed is named as breed1, breed2 so on till breed6 and there's also one breed listed under breed itsel. 

* Existing code : 

```
div>
            <input
              type="checkbox"
              id="sphynx-cat"
              name="breed6"
              value="sphynx-cat"
            />
            <label for="sphynx-cat">Sphynx Cat</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="american-shorthair"
              name="breed"
              value="american-shorthair"
            />
            <label for="american-shorthair">American Shorthair</label>
          </div>
 ```

* Updated code :

```
div>
            <input
              type="checkbox"
              id="sphynx-cat"
              name="breed"
              value="sphynx-cat"
            />
            <label for="sphynx-cat">Sphynx Cat</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="american-shorthair"
              name="breed"
              value="american-shorthair"
            />
            <label for="american-shorthair">American Shorthair</label>
          </div>
 ```


