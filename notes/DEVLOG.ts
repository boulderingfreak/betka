//TODO - now:

// 22.06
// -map images with pressable modal

//TODO - all tasks:

//- convert boulderCardsBox view into scrollview ( https://reactnative.dev/docs/scrollview )
// ? ScrollView renders all its react child components at once, but this has a performance downside.
// ? This is where FlatList comes into play. FlatList renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.
//- so convert into FLATLIST instead https://reactnative.dev/docs/flatlist
//- create data BoulderCard DATA js file (img uri (source), user_avatar img uri, name of boulder, )
// -VOLT WWA wrong style after focused

//* ----------------------------------------------------------------------------------------------------------------------------------------------------------
//* 19-22.06
//*-how to monitor SELECTED TEXT state ?
//* -Cold start - nothing choosed: Only gyms unlocked.

//* -Gym choosed:
//* 1. Load sectors data by gymId (value) and unlock sectors UI
//* 2. Load map image by gymId (value) and unlock map image UI

//* -Sector choosed:
//* 1. Load levels data by sectorId (value) and unlock levels UI
//* 2. Load map image by sectorId (value) and unlock map image UI
//* ----------------------------------------------------------------------------------------------------------------------------------------------------------

//* ----------------------------------------------------------------------------------------------------------------------------------------------------------
//* 19.06
//* -fix UI to end level //-focused/unfocused
//* -focused: search label placement + translate into "Szukaj"
//* -selected Obiekto = custom font + fontWeight
//*- block unfocused menus
//* ----------------------------------------------------------------------------------------------------------------------------------------------------------

//* ----------------------------------------------------------------------------------------------------------------------------------------------------------
//* 18.06
//! useFonts hook method must be inside _layout.tsx
//* ----------------------------------------------------------------------------------------------------------------------------------------------------------

//* ----------------------------------------------------------------------------------------------------------------------------------------------------------
//* 16.06
//*-2025 method dont work for me, trying once again old one https://docs.expo.dev/develop/user//-interface/fonts/
//*-testing font implement method in smaller component (BoulderCard)
//*-IT WORKS IN SMALLER component!
//*-bug fixed: font was loading correctly in both components but in DropDownMenu.tsx additional fontWeight: "bold" was making the problem
//*-now lets try to make function for loading this font because i will probably use it in many different places
//? Function vs Hook vs Component
//? I want to use this as "const result = doSomething()"      -create function
//? I want to use this as "const value = useSomething()"      -create hook
//? I want to use this as "<Something />"                     -create component
//* ----------------------------------------------------------------------------------------------------------------------------------------------------------

//* ----------------------------------------------------------------------------------------------------------------------------------------------------------
//* 15.06
//*-first method (useFonts useEffect) is not working inside component so trying other way to implement custom font
//*-google //-> https://javascript.plainenglish.io/add//-custom//-fonts//-in//-expo//-2025//-guide//-3611083cddf1 //-> this
//* ----------------------------------------------------------------------------------------------------------------------------------------------------------

//* ----------------------------------------------------------------------------------------------------------------------------------------------------------
//* 13.06 betka
//*-dodać font
//*-label "ostatnio dodane"
//*-stworzyć komponent "boulderCard" (4)
//*-naprawić (Tabs) //-probuje wstrzymać custom czcionkę najpierw
//*-https://docs.expo.dev/router/advanced/tabs/ //-> tutaj mam odpowiedz na buga, brakuje jednego pliku layout
//*-add example bottom navigation
//*-logo: fix in GIMP
//*-font
//* ----------------------------------------------------------------------------------------------------------------------------------------------------------

// notes
//* done
// !
// ?
// TODO

//?  feat:     nowa funkcjonalność
//?  fix:      naprawa buga
//?  style:    zmiana wyglądu/CSS
//?  refactor: reorganizacja kodu bez zmiany działania
//?  chore:    konfiguracja, zależności, pliki pomocnicze
//?  docs:     dokumentacja

//?  git add .
//?  git commit -m "chore: add videos folder with example mp4"
//?  git push
