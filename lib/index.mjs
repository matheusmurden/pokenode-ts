var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/constants/index.ts
var constants_exports = {};
__export(constants_exports, {
  BaseURL: () => BaseURL,
  Berries: () => Berries,
  BerryFirmnesses: () => BerryFirmnesses,
  BerryFlavors: () => BerryFlavors,
  ContestTypes: () => ContestTypes,
  EggGroups: () => EggGroups,
  EncounterConditionValues: () => EncounterConditionValues,
  EncounterConditions: () => EncounterConditions,
  EncounterMethods: () => EncounterMethods,
  Endpoints: () => Endpoints,
  EvolutionTriggers: () => EvolutionTriggers,
  Genders: () => Genders,
  Generations: () => Generations,
  GrowthRates: () => GrowthRates,
  ItemAttributes: () => ItemAttributes,
  ItemCategories: () => ItemCategories,
  ItemFlingEffects: () => ItemFlingEffects,
  ItemPockets: () => ItemPockets,
  Languages: () => Languages,
  MoveAilmtents: () => MoveAilmtents,
  MoveBattleStyles: () => MoveBattleStyles,
  MoveCategories: () => MoveCategories,
  MoveDamageClasses: () => MoveDamageClasses,
  MoveLearnMethods: () => MoveLearnMethods,
  MoveTargets: () => MoveTargets,
  Natures: () => Natures,
  PalParkAreas: () => PalParkAreas,
  PokeathlonStats: () => PokeathlonStats,
  Pokedexes: () => Pokedexes,
  PokemonColors: () => PokemonColors,
  PokemonHabitats: () => PokemonHabitats,
  PokemonShapes: () => PokemonShapes,
  Regions: () => Regions,
  Stats: () => Stats,
  Types: () => Types,
  VersionGroups: () => VersionGroups,
  Versions: () => Versions
});

// src/constants/base.ts
var BaseURL;
(function(BaseURL2) {
  BaseURL2["REST"] = "https://pokeapi.co/api/v2";
})(BaseURL || (BaseURL = {}));

// src/constants/endpoints.ts
var Endpoints;
(function(Endpoints2) {
  Endpoints2["Berry"] = "/berry";
  Endpoints2["BerryFirmness"] = "/berry-firmness";
  Endpoints2["BerryFlavor"] = "/berry-flavor";
  Endpoints2["ContestType"] = "/contest-type";
  Endpoints2["ContestEffect"] = "/contest-effect";
  Endpoints2["SuperContestEffect"] = "/super-contest-effect";
  Endpoints2["EncouterMethod"] = "/encounter-method";
  Endpoints2["EncounterCondition"] = "/encounter-condition";
  Endpoints2["EncouterConditionValue"] = "/encounter-condition-value";
  Endpoints2["EvolutionChain"] = "/evolution-chain";
  Endpoints2["EvolutionTrigger"] = "/evolution-trigger";
  Endpoints2["Generation"] = "/generation";
  Endpoints2["Pokedex"] = "/pokedex";
  Endpoints2["Version"] = "/version";
  Endpoints2["VersionGroup"] = "/version-group";
  Endpoints2["Item"] = "/item";
  Endpoints2["ItemAttribute"] = "/item-attribute";
  Endpoints2["ItemCategory"] = "/item-category";
  Endpoints2["ItemFlingEffect"] = "/item-fling-effect";
  Endpoints2["ItemPocket"] = "/item-pocket";
  Endpoints2["Location"] = "/location";
  Endpoints2["LocationArea"] = "/location-area";
  Endpoints2["PalParkArea"] = "/pal-park-area";
  Endpoints2["Region"] = "/region";
  Endpoints2["Machine"] = "/machine";
  Endpoints2["Move"] = "/move";
  Endpoints2["MoveAilment"] = "/move-ailment";
  Endpoints2["MoveBattleStyle"] = "/move-battle-style";
  Endpoints2["MoveCategory"] = "/move-category";
  Endpoints2["MoveDamageClass"] = "/move-damage-class";
  Endpoints2["MoveLearnMethod"] = "/move-learn-method";
  Endpoints2["MoveTarget"] = "/move-target";
  Endpoints2["Ability"] = "/ability";
  Endpoints2["Characteristic"] = "/characteristic";
  Endpoints2["EggGroup"] = "/egg-group";
  Endpoints2["Gender"] = "/gender";
  Endpoints2["GrowthRate"] = "/growth-rate";
  Endpoints2["Nature"] = "/nature";
  Endpoints2["PokeathlonStat"] = "/pokeathlon-stat";
  Endpoints2["Pokemon"] = "/pokemon";
  Endpoints2["PokemonLocationArea"] = "/pokemon/:id/encounters";
  Endpoints2["PokemonColor"] = "/pokemon-color";
  Endpoints2["PokemonForm"] = "/pokemon-form";
  Endpoints2["PokemonHabitat"] = "/pokemon-habitat";
  Endpoints2["PokemonShape"] = "/pokemon-shape";
  Endpoints2["PokemonSpecies"] = "/pokemon-species";
  Endpoints2["Stat"] = "/stat";
  Endpoints2["Type"] = "/type";
  Endpoints2["Language"] = "/language";
})(Endpoints || (Endpoints = {}));

// src/constants/berries.ts
var Berries;
(function(Berries2) {
  Berries2[Berries2["CHERI"] = 1] = "CHERI";
  Berries2[Berries2["CHESTO"] = 2] = "CHESTO";
  Berries2[Berries2["PECHA"] = 3] = "PECHA";
  Berries2[Berries2["RAWST"] = 4] = "RAWST";
  Berries2[Berries2["ASPEAR"] = 5] = "ASPEAR";
  Berries2[Berries2["LEPPA"] = 6] = "LEPPA";
  Berries2[Berries2["ORAN"] = 7] = "ORAN";
  Berries2[Berries2["PERSIM"] = 8] = "PERSIM";
  Berries2[Berries2["LUM"] = 9] = "LUM";
  Berries2[Berries2["SITRUS"] = 10] = "SITRUS";
  Berries2[Berries2["FIGY"] = 11] = "FIGY";
  Berries2[Berries2["WIKI"] = 12] = "WIKI";
  Berries2[Berries2["MAGO"] = 13] = "MAGO";
  Berries2[Berries2["AGUAV"] = 14] = "AGUAV";
  Berries2[Berries2["IAPAPA"] = 15] = "IAPAPA";
  Berries2[Berries2["RAZZ"] = 16] = "RAZZ";
  Berries2[Berries2["BLUK"] = 17] = "BLUK";
  Berries2[Berries2["NANAB"] = 18] = "NANAB";
  Berries2[Berries2["WEPEAR"] = 19] = "WEPEAR";
  Berries2[Berries2["PINAP"] = 20] = "PINAP";
  Berries2[Berries2["POMEG"] = 21] = "POMEG";
  Berries2[Berries2["KELPSY"] = 22] = "KELPSY";
  Berries2[Berries2["QUALOT"] = 23] = "QUALOT";
  Berries2[Berries2["HONDEW"] = 24] = "HONDEW";
  Berries2[Berries2["GREPA"] = 25] = "GREPA";
  Berries2[Berries2["TAMATO"] = 26] = "TAMATO";
  Berries2[Berries2["CORNN"] = 27] = "CORNN";
  Berries2[Berries2["MAGOST"] = 28] = "MAGOST";
  Berries2[Berries2["RABUTA"] = 29] = "RABUTA";
  Berries2[Berries2["NOMEL"] = 30] = "NOMEL";
  Berries2[Berries2["SPELON"] = 31] = "SPELON";
  Berries2[Berries2["PAMTRE"] = 32] = "PAMTRE";
  Berries2[Berries2["WATMEL"] = 33] = "WATMEL";
  Berries2[Berries2["DURIN"] = 34] = "DURIN";
  Berries2[Berries2["BELUE"] = 35] = "BELUE";
  Berries2[Berries2["OCCA"] = 36] = "OCCA";
  Berries2[Berries2["PASSHO"] = 37] = "PASSHO";
  Berries2[Berries2["WACAN"] = 38] = "WACAN";
  Berries2[Berries2["RINDO"] = 39] = "RINDO";
  Berries2[Berries2["YACHE"] = 40] = "YACHE";
  Berries2[Berries2["CHOPLE"] = 41] = "CHOPLE";
  Berries2[Berries2["KEBIA"] = 42] = "KEBIA";
  Berries2[Berries2["SHUCA"] = 43] = "SHUCA";
  Berries2[Berries2["COBA"] = 44] = "COBA";
  Berries2[Berries2["PAYAPA"] = 45] = "PAYAPA";
  Berries2[Berries2["TANGA"] = 46] = "TANGA";
  Berries2[Berries2["CHARTI"] = 47] = "CHARTI";
  Berries2[Berries2["KASIB"] = 48] = "KASIB";
  Berries2[Berries2["HABAN"] = 49] = "HABAN";
  Berries2[Berries2["COLBUR"] = 50] = "COLBUR";
  Berries2[Berries2["BABIRI"] = 51] = "BABIRI";
  Berries2[Berries2["CHILAN"] = 52] = "CHILAN";
  Berries2[Berries2["LIECHI"] = 53] = "LIECHI";
  Berries2[Berries2["GANLON"] = 54] = "GANLON";
  Berries2[Berries2["SALAC"] = 55] = "SALAC";
  Berries2[Berries2["PETAYA"] = 56] = "PETAYA";
  Berries2[Berries2["APICOT"] = 57] = "APICOT";
  Berries2[Berries2["LANSAT"] = 58] = "LANSAT";
  Berries2[Berries2["STARF"] = 59] = "STARF";
  Berries2[Berries2["ENIGMA"] = 60] = "ENIGMA";
  Berries2[Berries2["MICLE"] = 61] = "MICLE";
  Berries2[Berries2["CUSTAP"] = 62] = "CUSTAP";
  Berries2[Berries2["JABOCA"] = 63] = "JABOCA";
  Berries2[Berries2["ROWAP"] = 64] = "ROWAP";
})(Berries || (Berries = {}));
var BerryFirmnesses;
(function(BerryFirmnesses2) {
  BerryFirmnesses2[BerryFirmnesses2["VERY_SOFT"] = 1] = "VERY_SOFT";
  BerryFirmnesses2[BerryFirmnesses2["SOFT"] = 2] = "SOFT";
  BerryFirmnesses2[BerryFirmnesses2["HARD"] = 3] = "HARD";
  BerryFirmnesses2[BerryFirmnesses2["VERY_HARD"] = 4] = "VERY_HARD";
  BerryFirmnesses2[BerryFirmnesses2["SUPER_HARD"] = 5] = "SUPER_HARD";
})(BerryFirmnesses || (BerryFirmnesses = {}));
var BerryFlavors;
(function(BerryFlavors2) {
  BerryFlavors2[BerryFlavors2["SPICY"] = 1] = "SPICY";
  BerryFlavors2[BerryFlavors2["DRY"] = 2] = "DRY";
  BerryFlavors2[BerryFlavors2["SWEET"] = 3] = "SWEET";
  BerryFlavors2[BerryFlavors2["BITTER"] = 4] = "BITTER";
  BerryFlavors2[BerryFlavors2["SOUR"] = 5] = "SOUR";
})(BerryFlavors || (BerryFlavors = {}));

// src/constants/contests.ts
var ContestTypes;
(function(ContestTypes2) {
  ContestTypes2[ContestTypes2["COOL"] = 1] = "COOL";
  ContestTypes2[ContestTypes2["BEAUTY"] = 2] = "BEAUTY";
  ContestTypes2[ContestTypes2["CUTE"] = 3] = "CUTE";
  ContestTypes2[ContestTypes2["SMART"] = 4] = "SMART";
  ContestTypes2[ContestTypes2["TOUGH"] = 5] = "TOUGH";
})(ContestTypes || (ContestTypes = {}));

// src/constants/encounters.ts
var EncounterMethods;
(function(EncounterMethods2) {
  EncounterMethods2[EncounterMethods2["WALK"] = 1] = "WALK";
  EncounterMethods2[EncounterMethods2["OLD_ROD"] = 2] = "OLD_ROD";
  EncounterMethods2[EncounterMethods2["GOOD_ROD"] = 3] = "GOOD_ROD";
  EncounterMethods2[EncounterMethods2["SUPER_ROD"] = 4] = "SUPER_ROD";
  EncounterMethods2[EncounterMethods2["SURF"] = 5] = "SURF";
  EncounterMethods2[EncounterMethods2["ROCK_SMASH"] = 6] = "ROCK_SMASH";
  EncounterMethods2[EncounterMethods2["HEADBUTT"] = 7] = "HEADBUTT";
  EncounterMethods2[EncounterMethods2["DARK_GRASS"] = 8] = "DARK_GRASS";
  EncounterMethods2[EncounterMethods2["GRASS_SPOTS"] = 9] = "GRASS_SPOTS";
  EncounterMethods2[EncounterMethods2["CAVE_SPOTS"] = 10] = "CAVE_SPOTS";
  EncounterMethods2[EncounterMethods2["BRIDGE_SPOTS"] = 11] = "BRIDGE_SPOTS";
  EncounterMethods2[EncounterMethods2["SUPER_ROD_SPOTS"] = 12] = "SUPER_ROD_SPOTS";
  EncounterMethods2[EncounterMethods2["SURF_SPOTS"] = 13] = "SURF_SPOTS";
  EncounterMethods2[EncounterMethods2["YELLOW_FLOWERS"] = 14] = "YELLOW_FLOWERS";
  EncounterMethods2[EncounterMethods2["PURPLE_FLOWERS"] = 15] = "PURPLE_FLOWERS";
  EncounterMethods2[EncounterMethods2["RED_FLOWERS"] = 16] = "RED_FLOWERS";
  EncounterMethods2[EncounterMethods2["ROUGH_TERRAIN"] = 17] = "ROUGH_TERRAIN";
  EncounterMethods2[EncounterMethods2["GIFT"] = 18] = "GIFT";
  EncounterMethods2[EncounterMethods2["GIFT_EGG"] = 19] = "GIFT_EGG";
  EncounterMethods2[EncounterMethods2["ONLY_ONE"] = 20] = "ONLY_ONE";
  EncounterMethods2[EncounterMethods2["POKEFLUTE"] = 21] = "POKEFLUTE";
  EncounterMethods2[EncounterMethods2["HEADBUTT_LOW"] = 22] = "HEADBUTT_LOW";
  EncounterMethods2[EncounterMethods2["HEADBUTT_NORMAL"] = 23] = "HEADBUTT_NORMAL";
  EncounterMethods2[EncounterMethods2["HEADBUT_HIGH"] = 24] = "HEADBUT_HIGH";
  EncounterMethods2[EncounterMethods2["SQUIRT_BOTTLE"] = 25] = "SQUIRT_BOTTLE";
  EncounterMethods2[EncounterMethods2["WAILMER_PAIL"] = 26] = "WAILMER_PAIL";
  EncounterMethods2[EncounterMethods2["SEAWEED"] = 27] = "SEAWEED";
})(EncounterMethods || (EncounterMethods = {}));
var EncounterConditions;
(function(EncounterConditions2) {
  EncounterConditions2[EncounterConditions2["SWARM"] = 1] = "SWARM";
  EncounterConditions2[EncounterConditions2["TIME"] = 2] = "TIME";
  EncounterConditions2[EncounterConditions2["RADAR"] = 3] = "RADAR";
  EncounterConditions2[EncounterConditions2["SLOT2"] = 4] = "SLOT2";
  EncounterConditions2[EncounterConditions2["RADIO"] = 5] = "RADIO";
  EncounterConditions2[EncounterConditions2["SEASON"] = 6] = "SEASON";
  EncounterConditions2[EncounterConditions2["STARTER"] = 7] = "STARTER";
  EncounterConditions2[EncounterConditions2["TV_OPTION"] = 8] = "TV_OPTION";
  EncounterConditions2[EncounterConditions2["STORY_PROGRESS"] = 9] = "STORY_PROGRESS";
  EncounterConditions2[EncounterConditions2["OTHER"] = 10] = "OTHER";
})(EncounterConditions || (EncounterConditions = {}));
var EncounterConditionValues;
(function(EncounterConditionValues2) {
  EncounterConditionValues2[EncounterConditionValues2["SWARM_YES"] = 1] = "SWARM_YES";
  EncounterConditionValues2[EncounterConditionValues2["SWARM_NO"] = 2] = "SWARM_NO";
  EncounterConditionValues2[EncounterConditionValues2["TIME_MORNING"] = 3] = "TIME_MORNING";
  EncounterConditionValues2[EncounterConditionValues2["TIME_DAY"] = 4] = "TIME_DAY";
  EncounterConditionValues2[EncounterConditionValues2["TIME_NIGHT"] = 5] = "TIME_NIGHT";
  EncounterConditionValues2[EncounterConditionValues2["RADAR_ON"] = 6] = "RADAR_ON";
  EncounterConditionValues2[EncounterConditionValues2["RADAR_OFF"] = 7] = "RADAR_OFF";
  EncounterConditionValues2[EncounterConditionValues2["SLOT2_NONE"] = 8] = "SLOT2_NONE";
  EncounterConditionValues2[EncounterConditionValues2["SLOT2_RUBY"] = 9] = "SLOT2_RUBY";
  EncounterConditionValues2[EncounterConditionValues2["SLOT2_SAPHIRE"] = 10] = "SLOT2_SAPHIRE";
  EncounterConditionValues2[EncounterConditionValues2["SLOT2_EMERALD"] = 11] = "SLOT2_EMERALD";
  EncounterConditionValues2[EncounterConditionValues2["SLOT2_FIRERED"] = 12] = "SLOT2_FIRERED";
  EncounterConditionValues2[EncounterConditionValues2["SLOT2_LEAFGREEN"] = 13] = "SLOT2_LEAFGREEN";
  EncounterConditionValues2[EncounterConditionValues2["RADIO_OFF"] = 14] = "RADIO_OFF";
  EncounterConditionValues2[EncounterConditionValues2["RADIO_HOEN"] = 15] = "RADIO_HOEN";
  EncounterConditionValues2[EncounterConditionValues2["RADIO_SINNOH"] = 16] = "RADIO_SINNOH";
  EncounterConditionValues2[EncounterConditionValues2["SEASON_SPRING"] = 17] = "SEASON_SPRING";
  EncounterConditionValues2[EncounterConditionValues2["SEASON_SUMMER"] = 18] = "SEASON_SUMMER";
  EncounterConditionValues2[EncounterConditionValues2["SWASON_AUTUMN"] = 19] = "SWASON_AUTUMN";
  EncounterConditionValues2[EncounterConditionValues2["SEASON_WINTER"] = 20] = "SEASON_WINTER";
  EncounterConditionValues2[EncounterConditionValues2["STARTER_BULBASAUR"] = 21] = "STARTER_BULBASAUR";
  EncounterConditionValues2[EncounterConditionValues2["STARTER_SQUIRTLE"] = 22] = "STARTER_SQUIRTLE";
  EncounterConditionValues2[EncounterConditionValues2["STARTER_CHARMANDER"] = 23] = "STARTER_CHARMANDER";
  EncounterConditionValues2[EncounterConditionValues2["STARTER_CHESPIN"] = 24] = "STARTER_CHESPIN";
  EncounterConditionValues2[EncounterConditionValues2["STARTER_FENNEKIN"] = 25] = "STARTER_FENNEKIN";
  EncounterConditionValues2[EncounterConditionValues2["STARTER_FROAKIE"] = 26] = "STARTER_FROAKIE";
  EncounterConditionValues2[EncounterConditionValues2["TV_OPTION_BLUE"] = 27] = "TV_OPTION_BLUE";
  EncounterConditionValues2[EncounterConditionValues2["TV_OPTION_RED"] = 28] = "TV_OPTION_RED";
  EncounterConditionValues2[EncounterConditionValues2["STORY_PROGRESS_AWAKENED_BEASTS"] = 29] = "STORY_PROGRESS_AWAKENED_BEASTS";
  EncounterConditionValues2[EncounterConditionValues2["STORY_PROGRESS_BEAT_GALACTIC_CORONET"] = 30] = "STORY_PROGRESS_BEAT_GALACTIC_CORONET";
  EncounterConditionValues2[EncounterConditionValues2["STORY_PROGRESS_OAK_ETERNA_CITY"] = 31] = "STORY_PROGRESS_OAK_ETERNA_CITY";
  EncounterConditionValues2[EncounterConditionValues2["STORY_PROGRESS_OAK_VERMILION_COPYCAT"] = 32] = "STORY_PROGRESS_OAK_VERMILION_COPYCAT";
  EncounterConditionValues2[EncounterConditionValues2["STORY_PROGRESS_MET_TORNADUS_THUNDURUS"] = 33] = "STORY_PROGRESS_MET_TORNADUS_THUNDURUS";
  EncounterConditionValues2[EncounterConditionValues2["STORY_PROGRESS_BEAT_ELITE_FOUR_ROUND_TWO"] = 34] = "STORY_PROGRESS_BEAT_ELITE_FOUR_ROUND_TWO";
  EncounterConditionValues2[EncounterConditionValues2["STORY_PROGRESS_HALL_OF_FAME"] = 35] = "STORY_PROGRESS_HALL_OF_FAME";
  EncounterConditionValues2[EncounterConditionValues2["STORY_PROGRESS_NONE"] = 36] = "STORY_PROGRESS_NONE";
  EncounterConditionValues2[EncounterConditionValues2["STORY_PROGRESS_NATIONAL_DEX"] = 37] = "STORY_PROGRESS_NATIONAL_DEX";
  EncounterConditionValues2[EncounterConditionValues2["OTHER_NONE"] = 38] = "OTHER_NONE";
  EncounterConditionValues2[EncounterConditionValues2["OTHER_SNORLAX_LL_BEAT_LEAGUE"] = 39] = "OTHER_SNORLAX_LL_BEAT_LEAGUE";
})(EncounterConditionValues || (EncounterConditionValues = {}));

// src/constants/evolutions.ts
var EvolutionTriggers;
(function(EvolutionTriggers2) {
  EvolutionTriggers2[EvolutionTriggers2["LEVEL_UP"] = 1] = "LEVEL_UP";
  EvolutionTriggers2[EvolutionTriggers2["TRADE"] = 2] = "TRADE";
  EvolutionTriggers2[EvolutionTriggers2["USE_ITEM"] = 3] = "USE_ITEM";
  EvolutionTriggers2[EvolutionTriggers2["SHED"] = 4] = "SHED";
  EvolutionTriggers2[EvolutionTriggers2["SPIN"] = 5] = "SPIN";
  EvolutionTriggers2[EvolutionTriggers2["TOWER_OF_DARKNESS"] = 6] = "TOWER_OF_DARKNESS";
  EvolutionTriggers2[EvolutionTriggers2["TOWER_OF_WATER"] = 7] = "TOWER_OF_WATER";
  EvolutionTriggers2[EvolutionTriggers2["THREE_CRITICAL_HITS"] = 8] = "THREE_CRITICAL_HITS";
  EvolutionTriggers2[EvolutionTriggers2["TAKE_DAMAGE"] = 9] = "TAKE_DAMAGE";
  EvolutionTriggers2[EvolutionTriggers2["OTHER"] = 10] = "OTHER";
})(EvolutionTriggers || (EvolutionTriggers = {}));

// src/constants/games.ts
var Generations;
(function(Generations2) {
  Generations2[Generations2["GENERATION_I"] = 1] = "GENERATION_I";
  Generations2[Generations2["GENERATION_II"] = 2] = "GENERATION_II";
  Generations2[Generations2["GENERATION_III"] = 3] = "GENERATION_III";
  Generations2[Generations2["GENERATION_IV"] = 4] = "GENERATION_IV";
  Generations2[Generations2["GENERATION_V"] = 5] = "GENERATION_V";
  Generations2[Generations2["GENERATION_VI"] = 6] = "GENERATION_VI";
  Generations2[Generations2["GENERATION_VII"] = 7] = "GENERATION_VII";
  Generations2[Generations2["GENERATION_VIII"] = 8] = "GENERATION_VIII";
})(Generations || (Generations = {}));
var Pokedexes;
(function(Pokedexes2) {
  Pokedexes2[Pokedexes2["NATIONAL"] = 1] = "NATIONAL";
  Pokedexes2[Pokedexes2["KANTO"] = 2] = "KANTO";
  Pokedexes2[Pokedexes2["ORIGINAL_JOHTO"] = 3] = "ORIGINAL_JOHTO";
  Pokedexes2[Pokedexes2["HOENN"] = 4] = "HOENN";
  Pokedexes2[Pokedexes2["ORIGINAL_SINNOH"] = 5] = "ORIGINAL_SINNOH";
  Pokedexes2[Pokedexes2["EXTENDED_SINNOH"] = 6] = "EXTENDED_SINNOH";
  Pokedexes2[Pokedexes2["UPDATED_JOHTO"] = 7] = "UPDATED_JOHTO";
  Pokedexes2[Pokedexes2["ORIGINAL_UNOVA"] = 8] = "ORIGINAL_UNOVA";
  Pokedexes2[Pokedexes2["UPDATED_UNOVA"] = 9] = "UPDATED_UNOVA";
  Pokedexes2[Pokedexes2["CONQUEST_GALLERY"] = 11] = "CONQUEST_GALLERY";
  Pokedexes2[Pokedexes2["KALOS_CENTRAL"] = 12] = "KALOS_CENTRAL";
  Pokedexes2[Pokedexes2["KALOS_COASTAL"] = 13] = "KALOS_COASTAL";
  Pokedexes2[Pokedexes2["KALOS_MONTAIN"] = 14] = "KALOS_MONTAIN";
  Pokedexes2[Pokedexes2["UPDATED_HOENN"] = 15] = "UPDATED_HOENN";
  Pokedexes2[Pokedexes2["ORIGINAL_ALOLA"] = 16] = "ORIGINAL_ALOLA";
  Pokedexes2[Pokedexes2["ORIGINAL_MELEMELE"] = 17] = "ORIGINAL_MELEMELE";
  Pokedexes2[Pokedexes2["ORIGINAL_AKALA"] = 18] = "ORIGINAL_AKALA";
  Pokedexes2[Pokedexes2["ORIGINAL_ULAULA"] = 19] = "ORIGINAL_ULAULA";
  Pokedexes2[Pokedexes2["ORIGINAL_PONI"] = 20] = "ORIGINAL_PONI";
  Pokedexes2[Pokedexes2["UPDATED_ALOLA"] = 21] = "UPDATED_ALOLA";
  Pokedexes2[Pokedexes2["UPDATED_MELEMELE"] = 22] = "UPDATED_MELEMELE";
  Pokedexes2[Pokedexes2["UPDATED_AKALA"] = 23] = "UPDATED_AKALA";
  Pokedexes2[Pokedexes2["UPDATED_ULAULA"] = 24] = "UPDATED_ULAULA";
  Pokedexes2[Pokedexes2["UPDATED_PONI"] = 25] = "UPDATED_PONI";
  Pokedexes2[Pokedexes2["UPDATED_KANTO"] = 26] = "UPDATED_KANTO";
  Pokedexes2[Pokedexes2["GALAR"] = 27] = "GALAR";
  Pokedexes2[Pokedexes2["ISLE_OF_ARMOR"] = 28] = "ISLE_OF_ARMOR";
  Pokedexes2[Pokedexes2["CROWN_TUNDRA"] = 29] = "CROWN_TUNDRA";
})(Pokedexes || (Pokedexes = {}));
var Versions;
(function(Versions2) {
  Versions2[Versions2["RED"] = 1] = "RED";
  Versions2[Versions2["BLUE"] = 2] = "BLUE";
  Versions2[Versions2["YELLOW"] = 3] = "YELLOW";
  Versions2[Versions2["GOLD"] = 4] = "GOLD";
  Versions2[Versions2["SILVER"] = 5] = "SILVER";
  Versions2[Versions2["CRYSTAL"] = 6] = "CRYSTAL";
  Versions2[Versions2["RUBY"] = 7] = "RUBY";
  Versions2[Versions2["SAPPHIRE"] = 8] = "SAPPHIRE";
  Versions2[Versions2["EMERALD"] = 9] = "EMERALD";
  Versions2[Versions2["FIRERED"] = 10] = "FIRERED";
  Versions2[Versions2["LEAFGREEN"] = 11] = "LEAFGREEN";
  Versions2[Versions2["DIAMOND"] = 12] = "DIAMOND";
  Versions2[Versions2["PEARL"] = 13] = "PEARL";
  Versions2[Versions2["PLATINUM"] = 14] = "PLATINUM";
  Versions2[Versions2["HEARTGOLD"] = 15] = "HEARTGOLD";
  Versions2[Versions2["SOULSILVER"] = 16] = "SOULSILVER";
  Versions2[Versions2["BLACK"] = 17] = "BLACK";
  Versions2[Versions2["WHITE"] = 18] = "WHITE";
  Versions2[Versions2["COLOSSEUM"] = 19] = "COLOSSEUM";
  Versions2[Versions2["XD"] = 20] = "XD";
  Versions2[Versions2["BLACK_2"] = 21] = "BLACK_2";
  Versions2[Versions2["WHITE_2"] = 22] = "WHITE_2";
  Versions2[Versions2["X"] = 23] = "X";
  Versions2[Versions2["Y"] = 24] = "Y";
  Versions2[Versions2["OMEGA_RUBY"] = 25] = "OMEGA_RUBY";
  Versions2[Versions2["ALPHA_SAPPHIRE"] = 26] = "ALPHA_SAPPHIRE";
  Versions2[Versions2["SUN"] = 27] = "SUN";
  Versions2[Versions2["MOON"] = 28] = "MOON";
  Versions2[Versions2["ULTRA_SUN"] = 29] = "ULTRA_SUN";
  Versions2[Versions2["ULTRA_MOON"] = 30] = "ULTRA_MOON";
  Versions2[Versions2["LETS_GO_PIKACHU"] = 31] = "LETS_GO_PIKACHU";
  Versions2[Versions2["LETS_GO_EEVEE"] = 32] = "LETS_GO_EEVEE";
  Versions2[Versions2["SWORD"] = 33] = "SWORD";
  Versions2[Versions2["SHIELD"] = 34] = "SHIELD";
  Versions2[Versions2["THE_ISLE_OF_ARMOR"] = 35] = "THE_ISLE_OF_ARMOR";
  Versions2[Versions2["THE_CROWN_TUNDRA"] = 36] = "THE_CROWN_TUNDRA";
  Versions2[Versions2["BRILLIANT_DIAMOND"] = 37] = "BRILLIANT_DIAMOND";
  Versions2[Versions2["SHINING_PEARL"] = 38] = "SHINING_PEARL";
  Versions2[Versions2["LEGENDS_ARCEUS"] = 39] = "LEGENDS_ARCEUS";
})(Versions || (Versions = {}));
var VersionGroups;
(function(VersionGroups2) {
  VersionGroups2[VersionGroups2["RED_BLUE"] = 1] = "RED_BLUE";
  VersionGroups2[VersionGroups2["YELLOW"] = 2] = "YELLOW";
  VersionGroups2[VersionGroups2["GOLD_SILVER"] = 3] = "GOLD_SILVER";
  VersionGroups2[VersionGroups2["CRYSTAL"] = 4] = "CRYSTAL";
  VersionGroups2[VersionGroups2["RUBY_SAPPHIRE"] = 5] = "RUBY_SAPPHIRE";
  VersionGroups2[VersionGroups2["EMERALD"] = 6] = "EMERALD";
  VersionGroups2[VersionGroups2["FIRERED_LEAFGREEN"] = 7] = "FIRERED_LEAFGREEN";
  VersionGroups2[VersionGroups2["DIAMOND_PEARL"] = 8] = "DIAMOND_PEARL";
  VersionGroups2[VersionGroups2["PLATINUM"] = 9] = "PLATINUM";
  VersionGroups2[VersionGroups2["HEARTGOLD_SOULSILVER"] = 10] = "HEARTGOLD_SOULSILVER";
  VersionGroups2[VersionGroups2["BLACK_WHITE"] = 11] = "BLACK_WHITE";
  VersionGroups2[VersionGroups2["COLOSSEUM"] = 12] = "COLOSSEUM";
  VersionGroups2[VersionGroups2["XD"] = 13] = "XD";
  VersionGroups2[VersionGroups2["BLACK_2_WHITE_2"] = 14] = "BLACK_2_WHITE_2";
  VersionGroups2[VersionGroups2["X_Y"] = 15] = "X_Y";
  VersionGroups2[VersionGroups2["OMEGA_RUBY_ALPHA_SAPPHIRE"] = 16] = "OMEGA_RUBY_ALPHA_SAPPHIRE";
  VersionGroups2[VersionGroups2["SUN_MOON"] = 17] = "SUN_MOON";
  VersionGroups2[VersionGroups2["ULTRA_SUN_ULTRA_MOON"] = 18] = "ULTRA_SUN_ULTRA_MOON";
  VersionGroups2[VersionGroups2["LETS_GO"] = 19] = "LETS_GO";
  VersionGroups2[VersionGroups2["SWORD_SHIELD"] = 20] = "SWORD_SHIELD";
  VersionGroups2[VersionGroups2["THE_ISLE_OF_ARMOR"] = 21] = "THE_ISLE_OF_ARMOR";
  VersionGroups2[VersionGroups2["THE_CROWN_TUNDRA"] = 22] = "THE_CROWN_TUNDRA";
  VersionGroups2[VersionGroups2["BRILLIANT_DIAMOND_AND_SHINING_PEARL"] = 23] = "BRILLIANT_DIAMOND_AND_SHINING_PEARL";
  VersionGroups2[VersionGroups2["LEGENDS_ARCEUS"] = 24] = "LEGENDS_ARCEUS";
})(VersionGroups || (VersionGroups = {}));

// src/constants/locations.ts
var Regions;
(function(Regions2) {
  Regions2[Regions2["KANTO"] = 1] = "KANTO";
  Regions2[Regions2["JOHTO"] = 2] = "JOHTO";
  Regions2[Regions2["HOENN"] = 3] = "HOENN";
  Regions2[Regions2["SINNOH"] = 4] = "SINNOH";
  Regions2[Regions2["UNOVA"] = 5] = "UNOVA";
  Regions2[Regions2["KALOS"] = 6] = "KALOS";
  Regions2[Regions2["ALOLA"] = 7] = "ALOLA";
  Regions2[Regions2["GALAR"] = 8] = "GALAR";
  Regions2[Regions2["HISUI"] = 9] = "HISUI";
})(Regions || (Regions = {}));
var PalParkAreas;
(function(PalParkAreas2) {
  PalParkAreas2[PalParkAreas2["FOREST"] = 1] = "FOREST";
  PalParkAreas2[PalParkAreas2["FIELD"] = 2] = "FIELD";
  PalParkAreas2[PalParkAreas2["MOUNTAIN"] = 3] = "MOUNTAIN";
  PalParkAreas2[PalParkAreas2["POND"] = 4] = "POND";
  PalParkAreas2[PalParkAreas2["SEA"] = 5] = "SEA";
})(PalParkAreas || (PalParkAreas = {}));

// src/constants/moves.ts
var MoveAilmtents;
(function(MoveAilmtents2) {
  MoveAilmtents2[MoveAilmtents2["UNKNOWN"] = -1] = "UNKNOWN";
  MoveAilmtents2[MoveAilmtents2["NONE"] = 0] = "NONE";
  MoveAilmtents2[MoveAilmtents2["PARALYSIS"] = 1] = "PARALYSIS";
  MoveAilmtents2[MoveAilmtents2["SLEEP"] = 2] = "SLEEP";
  MoveAilmtents2[MoveAilmtents2["FREEZE"] = 3] = "FREEZE";
  MoveAilmtents2[MoveAilmtents2["BURN"] = 4] = "BURN";
  MoveAilmtents2[MoveAilmtents2["POISON"] = 5] = "POISON";
  MoveAilmtents2[MoveAilmtents2["CONFUSION"] = 6] = "CONFUSION";
  MoveAilmtents2[MoveAilmtents2["INFATUATION"] = 7] = "INFATUATION";
  MoveAilmtents2[MoveAilmtents2["TRAP"] = 8] = "TRAP";
  MoveAilmtents2[MoveAilmtents2["NIGHTMARE"] = 9] = "NIGHTMARE";
  MoveAilmtents2[MoveAilmtents2["TORMENT"] = 12] = "TORMENT";
  MoveAilmtents2[MoveAilmtents2["DISABLE"] = 13] = "DISABLE";
  MoveAilmtents2[MoveAilmtents2["YAWN"] = 14] = "YAWN";
  MoveAilmtents2[MoveAilmtents2["HEAL_BLOCK"] = 15] = "HEAL_BLOCK";
  MoveAilmtents2[MoveAilmtents2["NO_TYPE_IMMUNITY"] = 17] = "NO_TYPE_IMMUNITY";
  MoveAilmtents2[MoveAilmtents2["LEECH_SEED"] = 18] = "LEECH_SEED";
  MoveAilmtents2[MoveAilmtents2["EMBARGO"] = 19] = "EMBARGO";
  MoveAilmtents2[MoveAilmtents2["PERISH_SONG"] = 20] = "PERISH_SONG";
  MoveAilmtents2[MoveAilmtents2["INGRAIN"] = 21] = "INGRAIN";
  MoveAilmtents2[MoveAilmtents2["SILENCE"] = 24] = "SILENCE";
  MoveAilmtents2[MoveAilmtents2["TAR_SHOT"] = 42] = "TAR_SHOT";
})(MoveAilmtents || (MoveAilmtents = {}));
var MoveBattleStyles;
(function(MoveBattleStyles2) {
  MoveBattleStyles2[MoveBattleStyles2["ATTACK"] = 1] = "ATTACK";
  MoveBattleStyles2[MoveBattleStyles2["DEFENSE"] = 2] = "DEFENSE";
  MoveBattleStyles2[MoveBattleStyles2["SUPPORT"] = 3] = "SUPPORT";
})(MoveBattleStyles || (MoveBattleStyles = {}));
var MoveCategories;
(function(MoveCategories2) {
  MoveCategories2[MoveCategories2["DAMAGE"] = 0] = "DAMAGE";
  MoveCategories2[MoveCategories2["AILMENT"] = 1] = "AILMENT";
  MoveCategories2[MoveCategories2["NET_GOOD_STATS"] = 2] = "NET_GOOD_STATS";
  MoveCategories2[MoveCategories2["HEAL"] = 3] = "HEAL";
  MoveCategories2[MoveCategories2["DAMAGE_AILMENT"] = 4] = "DAMAGE_AILMENT";
  MoveCategories2[MoveCategories2["SWAGGER"] = 5] = "SWAGGER";
  MoveCategories2[MoveCategories2["DAMAGE_LOWER"] = 6] = "DAMAGE_LOWER";
  MoveCategories2[MoveCategories2["DAMAGE_RAISE"] = 7] = "DAMAGE_RAISE";
  MoveCategories2[MoveCategories2["DAMAGE_HEAL"] = 8] = "DAMAGE_HEAL";
  MoveCategories2[MoveCategories2["OHKO"] = 9] = "OHKO";
  MoveCategories2[MoveCategories2["WHOLE_FIELD_EFFECT"] = 10] = "WHOLE_FIELD_EFFECT";
  MoveCategories2[MoveCategories2["FIELD_EFFECT"] = 11] = "FIELD_EFFECT";
  MoveCategories2[MoveCategories2["FORCE_SWITCH"] = 12] = "FORCE_SWITCH";
  MoveCategories2[MoveCategories2["UNIQUE"] = 13] = "UNIQUE";
})(MoveCategories || (MoveCategories = {}));
var MoveDamageClasses;
(function(MoveDamageClasses2) {
  MoveDamageClasses2[MoveDamageClasses2["STATUS"] = 1] = "STATUS";
  MoveDamageClasses2[MoveDamageClasses2["PHYSICAL"] = 2] = "PHYSICAL";
  MoveDamageClasses2[MoveDamageClasses2["SPECIAL"] = 3] = "SPECIAL";
})(MoveDamageClasses || (MoveDamageClasses = {}));
var MoveLearnMethods;
(function(MoveLearnMethods2) {
  MoveLearnMethods2[MoveLearnMethods2["LEVEL_UP"] = 1] = "LEVEL_UP";
  MoveLearnMethods2[MoveLearnMethods2["EGG"] = 2] = "EGG";
  MoveLearnMethods2[MoveLearnMethods2["TUTOR"] = 3] = "TUTOR";
  MoveLearnMethods2[MoveLearnMethods2["MACHINE"] = 4] = "MACHINE";
  MoveLearnMethods2[MoveLearnMethods2["STADIUM_SURFING_PIKACHU"] = 5] = "STADIUM_SURFING_PIKACHU";
  MoveLearnMethods2[MoveLearnMethods2["LIGHT_BALL_EGG"] = 6] = "LIGHT_BALL_EGG";
  MoveLearnMethods2[MoveLearnMethods2["COLOSSEUM_PURIFICATION"] = 7] = "COLOSSEUM_PURIFICATION";
  MoveLearnMethods2[MoveLearnMethods2["XD_SHADOW"] = 8] = "XD_SHADOW";
  MoveLearnMethods2[MoveLearnMethods2["XD_PURIFICATION"] = 9] = "XD_PURIFICATION";
  MoveLearnMethods2[MoveLearnMethods2["FORM_CHANGE"] = 10] = "FORM_CHANGE";
})(MoveLearnMethods || (MoveLearnMethods = {}));
var MoveTargets;
(function(MoveTargets2) {
  MoveTargets2[MoveTargets2["SPECIFIC_MOVE"] = 1] = "SPECIFIC_MOVE";
  MoveTargets2[MoveTargets2["SELECTED_POKEMON_ME_FIRST"] = 2] = "SELECTED_POKEMON_ME_FIRST";
  MoveTargets2[MoveTargets2["ALLY"] = 3] = "ALLY";
  MoveTargets2[MoveTargets2["USERS_FIELD"] = 4] = "USERS_FIELD";
  MoveTargets2[MoveTargets2["USER_OR_ALLY"] = 5] = "USER_OR_ALLY";
  MoveTargets2[MoveTargets2["OPPONENTS_FIELD"] = 6] = "OPPONENTS_FIELD";
  MoveTargets2[MoveTargets2["USER"] = 7] = "USER";
  MoveTargets2[MoveTargets2["RANDOM_OPPONENT"] = 8] = "RANDOM_OPPONENT";
  MoveTargets2[MoveTargets2["ALL_OTHER_POKEMON"] = 9] = "ALL_OTHER_POKEMON";
  MoveTargets2[MoveTargets2["SELECTED_POKEMON"] = 10] = "SELECTED_POKEMON";
  MoveTargets2[MoveTargets2["ALL_OPPONENTS"] = 11] = "ALL_OPPONENTS";
  MoveTargets2[MoveTargets2["ENTIRE_FIELD"] = 12] = "ENTIRE_FIELD";
  MoveTargets2[MoveTargets2["USER_AND_ALIES"] = 13] = "USER_AND_ALIES";
  MoveTargets2[MoveTargets2["ALL_POKEMON"] = 14] = "ALL_POKEMON";
  MoveTargets2[MoveTargets2["ALL_ALLIES"] = 15] = "ALL_ALLIES";
})(MoveTargets || (MoveTargets = {}));

// src/constants/pokemons.ts
var EggGroups;
(function(EggGroups2) {
  EggGroups2[EggGroups2["MONSTER"] = 1] = "MONSTER";
  EggGroups2[EggGroups2["WATER1"] = 2] = "WATER1";
  EggGroups2[EggGroups2["BUG"] = 3] = "BUG";
  EggGroups2[EggGroups2["FLYING"] = 4] = "FLYING";
  EggGroups2[EggGroups2["GROUND"] = 5] = "GROUND";
  EggGroups2[EggGroups2["FAIRY"] = 6] = "FAIRY";
  EggGroups2[EggGroups2["PLANT"] = 7] = "PLANT";
  EggGroups2[EggGroups2["HUMANSHAPE"] = 8] = "HUMANSHAPE";
  EggGroups2[EggGroups2["WATER3"] = 9] = "WATER3";
  EggGroups2[EggGroups2["MINERAL"] = 10] = "MINERAL";
  EggGroups2[EggGroups2["INDETERMINATE"] = 11] = "INDETERMINATE";
  EggGroups2[EggGroups2["WATER2"] = 12] = "WATER2";
  EggGroups2[EggGroups2["DITTO"] = 13] = "DITTO";
  EggGroups2[EggGroups2["DRAGON"] = 14] = "DRAGON";
  EggGroups2[EggGroups2["NO_EGGS"] = 15] = "NO_EGGS";
})(EggGroups || (EggGroups = {}));
var Genders;
(function(Genders2) {
  Genders2[Genders2["FEMALE"] = 1] = "FEMALE";
  Genders2[Genders2["MALE"] = 2] = "MALE";
  Genders2[Genders2["GENDERLESS"] = 3] = "GENDERLESS";
})(Genders || (Genders = {}));
var GrowthRates;
(function(GrowthRates2) {
  GrowthRates2[GrowthRates2["SLOW"] = 1] = "SLOW";
  GrowthRates2[GrowthRates2["MEDIUM"] = 2] = "MEDIUM";
  GrowthRates2[GrowthRates2["FAST"] = 3] = "FAST";
  GrowthRates2[GrowthRates2["MEDIUM_SLOW"] = 4] = "MEDIUM_SLOW";
  GrowthRates2[GrowthRates2["SLOW_THEN_VERY_FAST"] = 5] = "SLOW_THEN_VERY_FAST";
  GrowthRates2[GrowthRates2["FAST_THEN_VERY_SLOW"] = 6] = "FAST_THEN_VERY_SLOW";
})(GrowthRates || (GrowthRates = {}));
var Natures;
(function(Natures2) {
  Natures2[Natures2["HARDY"] = 1] = "HARDY";
  Natures2[Natures2["BOLD"] = 2] = "BOLD";
  Natures2[Natures2["MODEST"] = 3] = "MODEST";
  Natures2[Natures2["CALM"] = 4] = "CALM";
  Natures2[Natures2["TIMID"] = 5] = "TIMID";
  Natures2[Natures2["LONELY"] = 6] = "LONELY";
  Natures2[Natures2["DOCILE"] = 7] = "DOCILE";
  Natures2[Natures2["MILD"] = 8] = "MILD";
  Natures2[Natures2["GENTLE"] = 9] = "GENTLE";
  Natures2[Natures2["HASTY"] = 10] = "HASTY";
  Natures2[Natures2["ADAMANT"] = 11] = "ADAMANT";
  Natures2[Natures2["IMPISH"] = 12] = "IMPISH";
  Natures2[Natures2["BASHFUL"] = 13] = "BASHFUL";
  Natures2[Natures2["CAREFUL"] = 14] = "CAREFUL";
  Natures2[Natures2["RASH"] = 15] = "RASH";
  Natures2[Natures2["JOLLY"] = 16] = "JOLLY";
  Natures2[Natures2["NAUGHTY"] = 17] = "NAUGHTY";
  Natures2[Natures2["LAX"] = 18] = "LAX";
  Natures2[Natures2["QUIRKY"] = 19] = "QUIRKY";
  Natures2[Natures2["NAIVE"] = 20] = "NAIVE";
  Natures2[Natures2["BRAVE"] = 21] = "BRAVE";
  Natures2[Natures2["RELAXED"] = 22] = "RELAXED";
  Natures2[Natures2["QUIET"] = 23] = "QUIET";
  Natures2[Natures2["SASSY"] = 24] = "SASSY";
  Natures2[Natures2["SERIOUS"] = 25] = "SERIOUS";
})(Natures || (Natures = {}));
var PokeathlonStats;
(function(PokeathlonStats2) {
  PokeathlonStats2[PokeathlonStats2["SPEED"] = 1] = "SPEED";
  PokeathlonStats2[PokeathlonStats2["POWER"] = 2] = "POWER";
  PokeathlonStats2[PokeathlonStats2["SKILL"] = 3] = "SKILL";
  PokeathlonStats2[PokeathlonStats2["STAMINA"] = 4] = "STAMINA";
  PokeathlonStats2[PokeathlonStats2["JUMP"] = 5] = "JUMP";
})(PokeathlonStats || (PokeathlonStats = {}));
var PokemonColors;
(function(PokemonColors2) {
  PokemonColors2[PokemonColors2["BLACK"] = 1] = "BLACK";
  PokemonColors2[PokemonColors2["BLUE"] = 2] = "BLUE";
  PokemonColors2[PokemonColors2["BROWN"] = 3] = "BROWN";
  PokemonColors2[PokemonColors2["GRAY"] = 4] = "GRAY";
  PokemonColors2[PokemonColors2["GREEN"] = 5] = "GREEN";
  PokemonColors2[PokemonColors2["PINK"] = 6] = "PINK";
  PokemonColors2[PokemonColors2["PURPLE"] = 7] = "PURPLE";
  PokemonColors2[PokemonColors2["RED"] = 8] = "RED";
  PokemonColors2[PokemonColors2["WHITE"] = 9] = "WHITE";
  PokemonColors2[PokemonColors2["YELLOW"] = 10] = "YELLOW";
})(PokemonColors || (PokemonColors = {}));
var PokemonHabitats;
(function(PokemonHabitats2) {
  PokemonHabitats2[PokemonHabitats2["CAVE"] = 1] = "CAVE";
  PokemonHabitats2[PokemonHabitats2["FOREST"] = 2] = "FOREST";
  PokemonHabitats2[PokemonHabitats2["GRASSLAND"] = 3] = "GRASSLAND";
  PokemonHabitats2[PokemonHabitats2["MONTAIN"] = 4] = "MONTAIN";
  PokemonHabitats2[PokemonHabitats2["RARE"] = 5] = "RARE";
  PokemonHabitats2[PokemonHabitats2["ROUGH_TERRAIN"] = 6] = "ROUGH_TERRAIN";
  PokemonHabitats2[PokemonHabitats2["SEA"] = 7] = "SEA";
  PokemonHabitats2[PokemonHabitats2["URBAN"] = 8] = "URBAN";
  PokemonHabitats2[PokemonHabitats2["WATERS_EDGE"] = 9] = "WATERS_EDGE";
})(PokemonHabitats || (PokemonHabitats = {}));
var PokemonShapes;
(function(PokemonShapes2) {
  PokemonShapes2[PokemonShapes2["BALL"] = 1] = "BALL";
  PokemonShapes2[PokemonShapes2["SQUIGGLE"] = 2] = "SQUIGGLE";
  PokemonShapes2[PokemonShapes2["FISH"] = 3] = "FISH";
  PokemonShapes2[PokemonShapes2["ARMS"] = 4] = "ARMS";
  PokemonShapes2[PokemonShapes2["BLOB"] = 5] = "BLOB";
  PokemonShapes2[PokemonShapes2["UPRIGHT"] = 6] = "UPRIGHT";
  PokemonShapes2[PokemonShapes2["LEGS"] = 7] = "LEGS";
  PokemonShapes2[PokemonShapes2["QUADRUPED"] = 8] = "QUADRUPED";
  PokemonShapes2[PokemonShapes2["WINGS"] = 9] = "WINGS";
  PokemonShapes2[PokemonShapes2["TENTACLES"] = 10] = "TENTACLES";
  PokemonShapes2[PokemonShapes2["HEADS"] = 11] = "HEADS";
  PokemonShapes2[PokemonShapes2["HUMANOID"] = 12] = "HUMANOID";
  PokemonShapes2[PokemonShapes2["BUG_WINGS"] = 13] = "BUG_WINGS";
  PokemonShapes2[PokemonShapes2["ARMOR"] = 14] = "ARMOR";
})(PokemonShapes || (PokemonShapes = {}));
var Stats;
(function(Stats2) {
  Stats2[Stats2["HP"] = 1] = "HP";
  Stats2[Stats2["ATTACK"] = 2] = "ATTACK";
  Stats2[Stats2["DEFENSE"] = 3] = "DEFENSE";
  Stats2[Stats2["SPECIAL_ATTACK"] = 4] = "SPECIAL_ATTACK";
  Stats2[Stats2["SPECIAL_DEFENSE"] = 5] = "SPECIAL_DEFENSE";
  Stats2[Stats2["SPEED"] = 6] = "SPEED";
  Stats2[Stats2["ACCURACY"] = 7] = "ACCURACY";
  Stats2[Stats2["EVASION"] = 8] = "EVASION";
})(Stats || (Stats = {}));
var Types;
(function(Types2) {
  Types2[Types2["NORMAL"] = 1] = "NORMAL";
  Types2[Types2["FIGHTING"] = 2] = "FIGHTING";
  Types2[Types2["FLYING"] = 3] = "FLYING";
  Types2[Types2["POISON"] = 4] = "POISON";
  Types2[Types2["GROUND"] = 5] = "GROUND";
  Types2[Types2["ROCK"] = 6] = "ROCK";
  Types2[Types2["BUG"] = 7] = "BUG";
  Types2[Types2["GHOST"] = 8] = "GHOST";
  Types2[Types2["STEEL"] = 9] = "STEEL";
  Types2[Types2["FIRE"] = 10] = "FIRE";
  Types2[Types2["WATER"] = 11] = "WATER";
  Types2[Types2["GRASS"] = 12] = "GRASS";
  Types2[Types2["ELECTRIC"] = 13] = "ELECTRIC";
  Types2[Types2["PSYCHIC"] = 14] = "PSYCHIC";
  Types2[Types2["ICE"] = 15] = "ICE";
  Types2[Types2["DRAGON"] = 16] = "DRAGON";
  Types2[Types2["DARK"] = 17] = "DARK";
  Types2[Types2["FAIRY"] = 18] = "FAIRY";
  Types2[Types2["UNKNOWN"] = 10001] = "UNKNOWN";
  Types2[Types2["SHADOW"] = 10002] = "SHADOW";
})(Types || (Types = {}));

// src/constants/utilities.ts
var Languages;
(function(Languages2) {
  Languages2[Languages2["JA_HRKT"] = 1] = "JA_HRKT";
  Languages2[Languages2["ROOMAJI"] = 2] = "ROOMAJI";
  Languages2[Languages2["KO"] = 3] = "KO";
  Languages2[Languages2["ZH_HANT"] = 4] = "ZH_HANT";
  Languages2[Languages2["FR"] = 5] = "FR";
  Languages2[Languages2["DE"] = 6] = "DE";
  Languages2[Languages2["ES"] = 7] = "ES";
  Languages2[Languages2["IT"] = 8] = "IT";
  Languages2[Languages2["EN"] = 9] = "EN";
  Languages2[Languages2["CS"] = 10] = "CS";
  Languages2[Languages2["JA"] = 11] = "JA";
  Languages2[Languages2["ZH_HANS"] = 12] = "ZH_HANS";
  Languages2[Languages2["PT_BR"] = 13] = "PT_BR";
})(Languages || (Languages = {}));

// src/constants/items.ts
var ItemAttributes;
(function(ItemAttributes2) {
  ItemAttributes2[ItemAttributes2["COUNTABLE"] = 1] = "COUNTABLE";
  ItemAttributes2[ItemAttributes2["CONSUMABLE"] = 2] = "CONSUMABLE";
  ItemAttributes2[ItemAttributes2["USABLE_OVERWORLD"] = 3] = "USABLE_OVERWORLD";
  ItemAttributes2[ItemAttributes2["USABLE_IN_BATTLE"] = 4] = "USABLE_IN_BATTLE";
  ItemAttributes2[ItemAttributes2["HOLDABLE"] = 5] = "HOLDABLE";
  ItemAttributes2[ItemAttributes2["HOLDABLE_PASSIVE"] = 6] = "HOLDABLE_PASSIVE";
  ItemAttributes2[ItemAttributes2["HOLDABLE_ACTIVE"] = 7] = "HOLDABLE_ACTIVE";
  ItemAttributes2[ItemAttributes2["UNDERGROUND"] = 8] = "UNDERGROUND";
})(ItemAttributes || (ItemAttributes = {}));
var ItemCategories;
(function(ItemCategories2) {
  ItemCategories2[ItemCategories2["STAT_BOOSTS"] = 1] = "STAT_BOOSTS";
  ItemCategories2[ItemCategories2["EFFORT_DROP"] = 2] = "EFFORT_DROP";
  ItemCategories2[ItemCategories2["MEDICINE"] = 3] = "MEDICINE";
  ItemCategories2[ItemCategories2["OTHER"] = 4] = "OTHER";
  ItemCategories2[ItemCategories2["IN_A_PINCH"] = 5] = "IN_A_PINCH";
  ItemCategories2[ItemCategories2["PICKY_HEALING"] = 6] = "PICKY_HEALING";
  ItemCategories2[ItemCategories2["TYPE_PROTECTION"] = 7] = "TYPE_PROTECTION";
  ItemCategories2[ItemCategories2["BAKING_ONLY"] = 8] = "BAKING_ONLY";
  ItemCategories2[ItemCategories2["COLLECTIBLES"] = 9] = "COLLECTIBLES";
  ItemCategories2[ItemCategories2["EVOLUTION"] = 10] = "EVOLUTION";
  ItemCategories2[ItemCategories2["SPELUNKING"] = 11] = "SPELUNKING";
  ItemCategories2[ItemCategories2["HELD_ITEMS"] = 12] = "HELD_ITEMS";
  ItemCategories2[ItemCategories2["CHOICE"] = 13] = "CHOICE";
  ItemCategories2[ItemCategories2["EFFORT_TRAINING"] = 14] = "EFFORT_TRAINING";
  ItemCategories2[ItemCategories2["BAD_HELD_ITEMS"] = 15] = "BAD_HELD_ITEMS";
  ItemCategories2[ItemCategories2["TRAINING"] = 16] = "TRAINING";
  ItemCategories2[ItemCategories2["PLATES"] = 17] = "PLATES";
  ItemCategories2[ItemCategories2["SPECIES_SPECIFIC"] = 18] = "SPECIES_SPECIFIC";
  ItemCategories2[ItemCategories2["TYPE_ENHANCEMENT"] = 19] = "TYPE_ENHANCEMENT";
  ItemCategories2[ItemCategories2["EVENT_ITEMS"] = 20] = "EVENT_ITEMS";
  ItemCategories2[ItemCategories2["GAMEPLAY"] = 21] = "GAMEPLAY";
  ItemCategories2[ItemCategories2["PLOT_ADVANCEMENT"] = 22] = "PLOT_ADVANCEMENT";
  ItemCategories2[ItemCategories2["UNUSED"] = 23] = "UNUSED";
  ItemCategories2[ItemCategories2["LOOT"] = 24] = "LOOT";
  ItemCategories2[ItemCategories2["ALL_MAIL"] = 25] = "ALL_MAIL";
  ItemCategories2[ItemCategories2["VITAMINS"] = 26] = "VITAMINS";
  ItemCategories2[ItemCategories2["HEALING"] = 27] = "HEALING";
  ItemCategories2[ItemCategories2["PP_RECOVERY"] = 28] = "PP_RECOVERY";
  ItemCategories2[ItemCategories2["REVIVAL"] = 29] = "REVIVAL";
  ItemCategories2[ItemCategories2["STATUS_CURES"] = 30] = "STATUS_CURES";
  ItemCategories2[ItemCategories2["MULCH"] = 32] = "MULCH";
  ItemCategories2[ItemCategories2["SPECIAL_BALLS"] = 33] = "SPECIAL_BALLS";
  ItemCategories2[ItemCategories2["STANDARD_BALLS"] = 34] = "STANDARD_BALLS";
  ItemCategories2[ItemCategories2["DEX_COMPLETION"] = 35] = "DEX_COMPLETION";
  ItemCategories2[ItemCategories2["SCARVES"] = 36] = "SCARVES";
  ItemCategories2[ItemCategories2["ALL_MACHINES"] = 37] = "ALL_MACHINES";
  ItemCategories2[ItemCategories2["FLUTES"] = 38] = "FLUTES";
  ItemCategories2[ItemCategories2["APRICORN_BALLS"] = 39] = "APRICORN_BALLS";
  ItemCategories2[ItemCategories2["APRICORN_BOX"] = 40] = "APRICORN_BOX";
  ItemCategories2[ItemCategories2["DATA_CARDS"] = 41] = "DATA_CARDS";
  ItemCategories2[ItemCategories2["JEWELS"] = 42] = "JEWELS";
  ItemCategories2[ItemCategories2["MIRACLE_SHOOTER"] = 43] = "MIRACLE_SHOOTER";
  ItemCategories2[ItemCategories2["MEGA_STONES"] = 44] = "MEGA_STONES";
  ItemCategories2[ItemCategories2["MEMORIES"] = 45] = "MEMORIES";
  ItemCategories2[ItemCategories2["Z_CRYSTALS"] = 46] = "Z_CRYSTALS";
  ItemCategories2[ItemCategories2["SPECIES_CANDIES"] = 47] = "SPECIES_CANDIES";
  ItemCategories2[ItemCategories2["CATCHING_BONUS"] = 48] = "CATCHING_BONUS";
  ItemCategories2[ItemCategories2["DYNAMAX_CRISTALS"] = 49] = "DYNAMAX_CRISTALS";
  ItemCategories2[ItemCategories2["NATURE_MINTS"] = 50] = "NATURE_MINTS";
  ItemCategories2[ItemCategories2["CURRY_INGREDIENTS"] = 51] = "CURRY_INGREDIENTS";
})(ItemCategories || (ItemCategories = {}));
var ItemFlingEffects;
(function(ItemFlingEffects2) {
  ItemFlingEffects2[ItemFlingEffects2["BADLY_POISON"] = 1] = "BADLY_POISON";
  ItemFlingEffects2[ItemFlingEffects2["BURN"] = 2] = "BURN";
  ItemFlingEffects2[ItemFlingEffects2["BERRY_EFFECT"] = 3] = "BERRY_EFFECT";
  ItemFlingEffects2[ItemFlingEffects2["HERB_EFFECT"] = 4] = "HERB_EFFECT";
  ItemFlingEffects2[ItemFlingEffects2["PARALYZE"] = 5] = "PARALYZE";
  ItemFlingEffects2[ItemFlingEffects2["POISON"] = 6] = "POISON";
  ItemFlingEffects2[ItemFlingEffects2["FLINCH"] = 7] = "FLINCH";
})(ItemFlingEffects || (ItemFlingEffects = {}));
var ItemPockets;
(function(ItemPockets2) {
  ItemPockets2[ItemPockets2["MISC"] = 1] = "MISC";
  ItemPockets2[ItemPockets2["MEDICINE"] = 2] = "MEDICINE";
  ItemPockets2[ItemPockets2["POKEBALLS"] = 3] = "POKEBALLS";
  ItemPockets2[ItemPockets2["MACHINES"] = 4] = "MACHINES";
  ItemPockets2[ItemPockets2["BERRIES"] = 5] = "BERRIES";
  ItemPockets2[ItemPockets2["MAIL"] = 6] = "MAIL";
  ItemPockets2[ItemPockets2["BATTLE"] = 7] = "BATTLE";
  ItemPockets2[ItemPockets2["KEY"] = 8] = "KEY";
})(ItemPockets || (ItemPockets = {}));

// src/structures/base.ts
import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

// src/config/logger.ts
import pino from "pino";
var createLogger = /* @__PURE__ */ __name((options) => pino(options), "createLogger");
var handleRequest = /* @__PURE__ */ __name((config, logger) => {
  logger.info(`[ Request Config ] ${config.method?.toUpperCase() || ""} | ${config.url || ""}`);
  return config;
}, "handleRequest");
var handleRequestError = /* @__PURE__ */ __name((error, logger) => {
  logger.error(`[ Request Error ] CODE ${error.code || "UNKNOWN"} | ${error.message}`);
  throw error;
}, "handleRequestError");
var handleResponse = /* @__PURE__ */ __name((response, logger) => {
  logger.info(response.data);
  return response;
}, "handleResponse");
var handleResponseError = /* @__PURE__ */ __name((error, logger) => {
  logger.error(`[ Response Error ] CODE ${error.code || "UNKNOWN"} | ${error.message}`);
  throw error;
}, "handleResponseError");

// src/structures/base.ts
var BaseClient = class {
  /**
  *
  */
  constructor(clientOptions) {
    this.api = setupCache(axios.create({
      baseURL: clientOptions?.baseURL ?? BaseURL.REST,
      headers: {
        "Content-Type": "application/json"
      }
    }), clientOptions?.cacheOptions);
    this.logger = createLogger({
      enabled: !(clientOptions?.logOptions?.enabled === void 0 || clientOptions?.logOptions.enabled === false),
      ...clientOptions?.logOptions
    });
    this.api.interceptors.request.use((config) => handleRequest(config, this.logger), (error) => handleRequestError(error, this.logger));
    this.api.interceptors.response.use((response) => handleResponse(response, this.logger), (error) => handleResponseError(error, this.logger));
  }
};
__name(BaseClient, "BaseClient");

// src/clients/berry.client.ts
var BerryClient = class extends BaseClient {
  constructor(clientOptions) {
    super(clientOptions);
  }
  /**
  * Get a Berry by it's name
  * @param name The berry name
  * @returns A Berry
  */
  async getBerryByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Berry}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Berry by it's ID
  * @param id The Berry ID
  * @returns A Berry
  */
  async getBerryById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Berry}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Berry Firmness by it's ID
  * @param id The Berry ID
  * @returns Berry Firmness
  */
  async getBerryFirmnessById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.BerryFirmness}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Berry Firmness by it's ID
  * @param name The Berry name
  * @returns Berry Firmness
  */
  async getBerryFirmnessByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.BerryFirmness}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature.
  * Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
  * @param id The Berry Flavor ID
  * @returns Berry Flavor
  */
  async getBerryFlavorById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.BerryFlavor}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature.
  * Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
  * @param name The Berry Flavor name
  * @returns Berry Flavor
  */
  async getBerryFlavorByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.BerryFlavor}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Berries
  * @param offset The first item that you will get
  * @param limit How many berries per page
  * @returns A list of berries
  */
  listBerries(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Berry}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Berries
  * @param offset The first item that you will get
  * @param limit How many berry firmnesses per page
  * @returns A list of berry firmnesses
  */
  listBerryFirmnesses(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.BerryFirmness}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Berry Flavors
  * @param offset The first item that you will get
  * @param limit How many Berry Flavors per page
  * @returns A list of Berry Flavors
  */
  listBerryFlavors(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.BerryFlavor}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
};
__name(BerryClient, "BerryClient");

// src/clients/contest.client.ts
var ContestClient = class extends BaseClient {
  /**
  * @argument clientOptions Options for the client.
  */
  constructor(clientOptions) {
    super(clientOptions);
  }
  /**
  * Get a Contest Type by it's name
  * @param name  The contest type name
  * @returns A Contest Type
  */
  async getContestTypeByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ContestType}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Contest Type by it's ID
  * @param id The Contest Type ID
  * @returns A Contest Type
  */
  async getContestTypeById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ContestType}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Contest Effect by it's ID
  * @param id The Contest Effect ID
  * @returns Contest Effect
  */
  async getContestEffectById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ContestEffect}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Super Contest Effect by it's ID
  * @param id The Super Contest Effect ID
  * @returns Super Contest Effect
  */
  async getSuperContestEffectById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.SuperContestEffect}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Contest Types
  * @param offset The first item that you will get
  * @param limit How many contest types per page
  * @returns A list of contest types
  */
  async listContestTypes(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ContestType}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Contest Effects
  * @param offset The first item that you will get
  * @param limit How many contest effects per page
  * @returns A list of contest effects
  */
  async listContestEffects(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ContestEffect}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Super Contest Effects
  * @param offset The first item that you will get
  * @param limit How many Super Contest Effect per page
  * @returns A list of Super Contest Effect
  */
  async listSuperContestEffects(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.SuperContestEffect}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
};
__name(ContestClient, "ContestClient");

// src/clients/encounter.client.ts
var EncounterClient = class extends BaseClient {
  /**
  * @argument clientOptions Options for the client.
  */
  constructor(clientOptions) {
    super(clientOptions);
  }
  /**
  * Get an Encounter Method by it's name
  * @param name The Encounter Method name
  * @returns An Encounter Method
  */
  async getEncounterMethodByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EncouterMethod}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Encounter Method by it's ID
  * @param id The Encounter Method ID
  * @returns An Encounter Method
  */
  async getEncounterMethodById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EncouterMethod}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Encounter Condition by it's ID
  * @param id The Encounter Condition ID
  * @returns An Encounter Condition
  */
  async getEncounterConditionById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EncounterCondition}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Encounter Condition by it's name
  * @param name The Encounter Condition name
  * @returns An Encounter Condition
  */
  async getEncounterConditionByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EncounterCondition}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Encounter Condition Value by it's name
  * @param name The Encounter Condition Value name
  * @returns An Encounter Condition Value
  */
  async getEncounterConditionValueByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EncouterConditionValue}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Encounter Condition Value by it's ID
  * @param id The Encounter Condition Value ID
  * @returns An Encounter Condition Value
  */
  async getEncounterConditionValueById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EncouterConditionValue}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Encounter Methods
  * @param offset The first item that you will get
  * @param limit How many Encounter Methods per page
  * @returns A list of Encounter Methods
  */
  async listEncounterMethods(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EncouterMethod}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Encounter Conditions
  * @param offset The first item that you will get
  * @param limit How many Encounter Conditions per page
  * @returns A list of Encounter Methods
  */
  async listEncounterConditions(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EncounterCondition}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Encounter Condition Values
  * @param offset The first item that you will get
  * @param limit How many Encounter Condition Values per page
  * @returns A list of Encounter Condition Values
  */
  async listEncounterConditionValues(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EncouterConditionValue}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
};
__name(EncounterClient, "EncounterClient");

// src/clients/evolution.client.ts
var EvolutionClient = class extends BaseClient {
  /**
  * @argument clientOptions Options for the client.
  */
  constructor(clientOptions) {
    super(clientOptions);
  }
  /**
  * Get an Evolution Chain by it's ID
  * @param id The Evolution Chain ID
  * @returns An Evolution Chain
  */
  async getEvolutionChainById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EvolutionChain}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Evolution Trigger by it's ID
  * @param id The Evolution Trigger ID
  * @returns An Evolution Trigger
  */
  async getEvolutionTriggerById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EvolutionTrigger}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Evolution Trigger by it's name
  * @param name The Evolution Trigger name
  * @returns An Evolution Trigger
  */
  async getEvolutionTriggerByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EvolutionTrigger}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Evolution Chains
  * @param offset The first item that you will get
  * @param limit How many Evolution Chains per page
  * @returns A list of Evolution Chains
  */
  async listEvolutionChains(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EvolutionChain}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Evolution Triggers
  * @param offset The first item that you will get
  * @param limit How many Evolution Triggers per page
  * @returns A list of Evolution Triggers
  */
  async listEvolutionTriggers(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EvolutionTrigger}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
};
__name(EvolutionClient, "EvolutionClient");

// src/clients/game.client.ts
var GameClient = class extends BaseClient {
  /**
  * @argument clientOptions Options for the client.
  */
  constructor(clientOptions) {
    super(clientOptions);
  }
  /**
  * Get a Generation by it's name
  * @param name The generation name
  * @returns A Generation
  */
  async getGenerationByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Generation}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Generation by it's ID
  * @param id The generation ID
  * @returns A Generation
  */
  async getGenerationById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Generation}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokedex by it's name
  * @param name The pokedex name
  * @returns A Pokedex
  */
  async getPokedexByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Pokedex}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokedex by it's ID
  * @param id The pokedex ID
  * @returns A Pokedex
  */
  async getPokedexById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Pokedex}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Version by it's name
  * @param name The version name
  * @returns A Version
  */
  async getVersionByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Version}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Version by it's ID
  * @param id The version ID
  * @returns A Version
  */
  async getVersionById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Version}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Version Group by it's name
  * @param name The version group name
  * @returns A Version Group
  */
  async getVersionGroupByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.VersionGroup}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Version Group by it's ID
  * @param id The version group ID
  * @returns A Version Group
  */
  async getVersionGroupById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.VersionGroup}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Generations
  * @param offset The first item that you will get
  * @param limit How many Generations per page
  * @returns A list of Generations
  */
  async listGenerations(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Generation}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Pokedexes
  * @param offset The first item that you will get
  * @param limit How many Pokedexes per page
  * @returns A list of Pokedexes
  */
  async listPokedexes(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Pokedex}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Versions
  * @param offset The first item that you will get
  * @param limit How many Versions per page
  * @returns A list of Versions
  */
  async listVersions(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Version}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Version Groups
  * @param offset The first item that you will get
  * @param limit How many Version Groups per page
  * @returns A list of Version Groups
  */
  async listVersionGroups(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.VersionGroup}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
};
__name(GameClient, "GameClient");

// src/clients/item.client.ts
var ItemClient = class extends BaseClient {
  /**
  * @argument clientOptions Options for the client.
  */
  constructor(clientOptions) {
    super(clientOptions);
  }
  /**
  * Get an Item by it's name
  * @param name The item name
  * @returns An Item
  */
  async getItemByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Item}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Item by it's ID
  * @param id The item ID
  * @returns An Item
  */
  async getItemById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Item}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Item Attribute by it's name
  * @param name The item attribute name
  * @returns An Item Attribute
  */
  async getItemAttributeByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemAttribute}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Item Attribute by it's ID
  * @param id The item attribute ID
  * @returns An Item Attribute
  */
  async getItemAttributeById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemAttribute}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Item Category by it's name
  * @param name The item category name
  * @returns An Item Category
  */
  async getItemCategoryByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemCategory}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Item Category by it's ID
  * @param id The item category ID
  * @returns An Item Category
  */
  async getItemCategoryById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemCategory}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Item Filing Effect by it's name
  * @param name The item filing effect name
  * @returns An Item Filing Effect
  */
  async getItemFlingEffectByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemFlingEffect}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Item Filing Effect by it's ID
  * @param id The item filing effect ID
  * @returns An Item Filing Effect
  */
  async getItemFlingEffectById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemFlingEffect}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Item Pocket by it's name
  * @param name The item pocket name
  * @returns An Item Pocket
  */
  async getItemPocketByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemPocket}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Item Pocket by it's ID
  * @param id The item pocket ID
  * @returns An Item Pocket
  */
  async getItemPocketById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemPocket}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Items
  * @param offset The first item that you will get
  * @param limit How many Items per page
  * @returns A list of Items
  */
  async listItems(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Item}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Item Attributes
  * @param offset The first item that you will get
  * @param limit How many Item Attributes per page
  * @returns A list of Item Attributes
  */
  async listItemAttributes(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemAttribute}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Item Categories
  * @param offset The first item that you will get
  * @param limit How many Item Categories per page
  * @returns A list of Item Categories
  */
  async listItemCategories(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemCategory}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Item Filing Effects
  * @param offset The first item that you will get
  * @param limit How many Item Filing Effects per page
  * @returns A list of Item Filing Effects
  */
  async listItemFilingEffects(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemFlingEffect}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Item Pockets
  * @param offset The first item that you will get
  * @param limit How many Item Pockets per page
  * @returns A list of Item Pockets
  */
  async listItemPockets(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.ItemPocket}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
};
__name(ItemClient, "ItemClient");

// src/clients/location.client.ts
var LocationClient = class extends BaseClient {
  /**
  * @argument clientOptions Options for the client.
  */
  constructor(clientOptions) {
    super(clientOptions);
  }
  /**
  * Get a Location by it's name
  * @param name The Location name
  * @returns A Location
  */
  async getLocationByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Location}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Location by it's ID
  * @param id The Location ID
  * @returns A location
  */
  async getLocationById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Location}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Location Area by it's name
  * @param name The Location Area name
  * @returns A Location Area
  */
  async getLocationAreaByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.LocationArea}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Location Area by it's ID
  * @param id The Location Area ID
  * @returns A Location Area
  */
  async getLocationAreaById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.LocationArea}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pal Park Area by it's name
  * @param name The Pal Park Area name
  * @returns A Pal Park Area
  */
  async getPalParkAreaByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PalParkArea}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pal Park Area by it's ID
  * @param id The Pal Park Area ID
  * @returns A Pal Park Area
  */
  async getPalParkAreaById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PalParkArea}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Region by it's name
  * @param name The Region name
  * @returns A Region
  */
  async getRegionByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Region}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Region by it's ID
  * @param id The Region ID
  * @returns A Region
  */
  async getRegionById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Region}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Locations
  * @param offset The first item that you will get
  * @param limit How many Locations per page
  * @returns A list of Locations
  */
  async listLocations(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Location}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Location Areas
  * @param offset The first item that you will get
  * @param limit How many Locations per page
  * @returns A list of Location Areas
  */
  async listLocationAreas(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.LocationArea}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Pal Park Areas
  * @param offset The first item that you will get
  * @param limit How many Pal Park Areas per page
  * @returns A list of Pal Park Areas
  */
  async listPalParkAreas(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PalParkArea}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Regions
  * @param offset The first item that you will get
  * @param limit How many Regions per page
  * @returns A list of Regions
  */
  async listRegions(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Region}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
};
__name(LocationClient, "LocationClient");

// src/clients/machine.client.ts
var MachineClient = class extends BaseClient {
  /**
  * @argument clientOptions Options for the client.
  */
  constructor(clientOptions) {
    super(clientOptions);
  }
  /**
  * Get a Machine by it's ID
  * @param id The Machine ID
  * @returns A Machine
  */
  async getMachineById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Machine}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Machines
  * @param offset The first item that you will get
  * @param limit How many Machines per page
  * @returns A list of Machines
  */
  async listMachines(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Machine}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
};
__name(MachineClient, "MachineClient");

// src/clients/move.client.ts
var MoveClient = class extends BaseClient {
  /**
  * @argument clientOptions Options for the client.
  */
  constructor(clientOptions) {
    super(clientOptions);
  }
  /**
  * Get a Move by it's name
  * @param name The move name
  * @returns A Move
  */
  async getMoveByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Move}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move by it's ID
  * @param id The Move ID
  * @returns A Move
  */
  async getMoveById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Move}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Ailment by it's name
  * @param name The Move Ailment name
  * @returns A Move Ailment
  */
  async getMoveAilmentByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveAilment}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Ailment by it's ID
  * @param id The Move Ailment ID
  * @returns A Move Ailment
  */
  async getMoveAilmentById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveAilment}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Battle Style by it's name
  * @param name The Move Battle Style name
  * @returns A Move Battle Style
  */
  async getMoveBattleStyleByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveBattleStyle}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Battle Style by it's ID
  * @param id The Move Battle Style ID
  * @returns A Move Battle Style
  */
  async getMoveBattleStyleById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveBattleStyle}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Battle Category by it's name
  * @param name The Move Category name
  * @returns A Move Category
  */
  async getMoveCategoryByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveCategory}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Battle Category by it's ID
  * @param id The Move Category ID
  * @returns A Move Category
  */
  async getMoveCategoryById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveCategory}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Damage Class by it's name
  * @param name The Move Damage Class name
  * @returns A Move Damage Class
  */
  async getMoveDamageClassByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveDamageClass}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Damage Class by it's ID
  * @param id The Move Damage Class ID
  * @returns A Move Damage Class
  */
  async getMoveDamageClassById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveDamageClass}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Learn Method by it's name
  * @param name The Move Learn Method name
  * @returns A Move Learn Method
  */
  async getMoveLearnMethodByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveLearnMethod}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Learn Method by it's ID
  * @param id The Move Learn Method ID
  * @returns A Move Learn Method
  */
  async getMoveLearnMethodById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveLearnMethod}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Target by it's name
  * @param name The Move Target name
  * @returns A Move Target
  */
  async getMoveTargetByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveTarget}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Move Target by it's ID
  * @param id The Move Target ID
  * @returns A Move Target
  */
  async getMoveTargetById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveTarget}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Moves
  * @param offset The first item that you will get
  * @param limit How many Moves per page
  * @returns A list of Moves
  */
  async listMoves(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Move}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Move Ailments
  * @param offset The first item that you will get
  * @param limit How many Move Ailments per page
  * @returns A list of Move Ailments
  */
  async listMoveAilments(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveAilment}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Move Battle Styles
  * @param offset The first item that you will get
  * @param limit How many Move Battle Styles per page
  * @returns A list of Move Battle Styles
  */
  async listMoveBattleStyles(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveBattleStyle}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Move Categories
  * @param offset The first item that you will get
  * @param limit How many Move Categories per page
  * @returns A list of Move Categories
  */
  async listMoveCategories(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveCategory}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Move Damage Classes
  * @param offset The first item that you will get
  * @param limit How many Move Damage Classes per page
  * @returns A list of Move Damage Classes
  */
  async listMoveDamageClasses(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveDamageClass}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Move Learn Methods
  * @param offset The first item that you will get
  * @param limit How many Move Learn Methods per page
  * @returns A list of Move Learn Methods
  */
  async listMoveLearnMethods(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveLearnMethod}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Move Targets
  * @param offset The first item that you will get
  * @param limit How many Move Targets per page
  * @returns A list of Move Targets
  */
  async listMoveTargets(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.MoveTarget}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
};
__name(MoveClient, "MoveClient");

// src/clients/pokemon.client.ts
var PokemonClient = class extends BaseClient {
  /**
  * @argument clientOptions Options for the client.
  */
  constructor(clientOptions) {
    super(clientOptions);
  }
  /**
  * Get an Ability by it's name
  * @param name The Ability name
  * @returns An Ability
  */
  async getAbilityByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Ability}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Ability by it's ID
  * @param id The Ability ID
  * @returns An Ability
  */
  async getAbilityById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Ability}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Characteristic by it's ID
  * @param id The Characteristic ID
  * @returns A Characteristic
  */
  async getCharacteristicById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Characteristic}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Egg Group by it's name
  * @param name The Egg Group name
  * @returns An Egg Group
  */
  async getEggGroupByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EggGroup}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get an Egg Group by it's ID
  * @param id The Egg Group ID
  * @returns An Egg Group
  */
  async getEggGroupById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EggGroup}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Gender by it's name
  * @param name The gender name
  * @returns An Egg Group
  */
  async getGenderByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Gender}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Gender by it's ID
  * @param id The Gender ID
  * @returns A Gender
  */
  async getGenderById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Gender}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Growth Rate by it's name
  * @param name The Growth Rate name
  * @returns A Growth Rate
  */
  async getGrowthRateByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.GrowthRate}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Growth Rate by it's ID
  * @param id The Growth Rate ID
  * @returns A Growth Rate
  */
  async getGrowthRateById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.GrowthRate}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Nature by it's name
  * @param name The Nature name
  * @returns A Nature
  */
  async getNatureByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Nature}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Nature by it's ID
  * @param id The Nature ID
  * @returns A Nature
  */
  async getNatureById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Nature}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokeathlon Stat by it's name
  * @param name The Pokeathlon Stat name
  * @returns A Pokeathlon Stat
  */
  async getPokeathlonStatByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokeathlonStat}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokeathlon Stat by it's ID
  * @param id The Pokeathlon Stat ID
  * @returns A Pokeathlon Stat
  */
  async getPokeathlonStatById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokeathlonStat}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon by it's name
  * @param name The Pokemon name
  * @returns A Pokemon Stat
  */
  async getPokemonByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Pokemon}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon by it's ID
  * @param id The Pokemon ID
  * @returns A Pokemon
  */
  async getPokemonById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Pokemon}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon Location Area by it's ID
  * @param id The Pokemon Location Area ID
  * @returns A Pokemon Location Area
  */
  async getPokemonLocationAreaById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonLocationArea.replace(":id", id.toString())}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon Color by it's name
  * @param name The Pokemon Color name
  * @returns A Pokemon Color
  */
  async getPokemonColorByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonColor}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon Color by it's ID
  * @param id The Pokemon Color ID
  * @returns A Pokemon Color
  */
  async getPokemonColorById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonColor}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon Form by it's name
  * @param name The Pokemon Form name
  * @returns A Pokemon Form
  */
  async getPokemonFormByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonForm}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon Form by it's ID
  * @param id The Pokemon Form ID
  * @returns A Pokemon Form
  */
  async getPokemonFormById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonForm}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon Habitat by it's name
  * @param name The Pokemon Habitat name
  * @returns A Pokemon Habitat
  */
  async getPokemonHabitatByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonHabitat}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon Habitat by it's ID
  * @param id The Pokemon Habitat Form ID
  * @returns A Pokemon Habitat
  */
  async getPokemonHabitatById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonHabitat}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon Shape by it's name
  * @param name The Pokemon Shape name
  * @returns A Pokemon Shape
  */
  async getPokemonShapeByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonShape}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon Shape by it's ID
  * @param id The Pokemon Shape Form ID
  * @returns A Pokemon Shape
  */
  async getPokemonShapeById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonShape}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon Species by it's name
  * @param name The Pokemon Species name
  * @returns A Pokemon Species
  */
  async getPokemonSpeciesByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonSpecies}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Pokemon Species by it's ID
  * @param id The Pokemon Species Form ID
  * @returns A Pokemon Species
  */
  async getPokemonSpeciesById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonSpecies}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Stat by it's name
  * @param name The Stat name
  * @returns A Stat
  */
  async getStatByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Stat}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Stat by it's ID
  * @param id The Stat ID
  * @returns A Stat
  */
  async getStatById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Stat}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Type by it's name
  * @param name The Type name
  * @returns A Type
  */
  async getTypeByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Type}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Type by it's ID
  * @param id The Type ID
  * @returns A Type
  */
  async getTypeById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Type}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Abilities
  * @param offset The first item that you will get
  * @param limit How many Abilities per page
  * @returns A list of Abilities
  */
  async listAbilities(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Ability}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Characteristics
  * @param offset The first item that you will get
  * @param limit How many Characteristics per page
  * @returns A list of Characteristics
  */
  async listCharacteristics(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Characteristic}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Egg Groups
  * @param offset The first item that you will get
  * @param limit How many Egg Groups per page
  * @returns A list of Egg Groups
  */
  async listEggGroups(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.EggGroup}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Genders
  * @param offset The first item that you will get
  * @param limit How many Genders per page
  * @returns A list of Genders
  */
  async listGenders(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Gender}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Growth Rates
  * @param offset The first item that you will get
  * @param limit How many Growth Rates per page
  * @returns A list of Growth Rates
  */
  async listGrowthRates(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.GrowthRate}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Natures
  * @param offset The first item that you will get
  * @param limit How many Growth Natures per page
  * @returns A list of Natures
  */
  async listNatures(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Nature}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Pokeathlon Stats
  * @param offset The first item that you will get
  * @param limit How many Pokeathlon Stats per page
  * @returns A list of Pokeathlon Stats
  */
  async listPokeathlonStats(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokeathlonStat}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Pokemons
  * @param offset The first item that you will get
  * @param limit How many Pokemons Stats per page
  * @returns A list of Pokemons
  */
  async listPokemons(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Pokemon}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Pokemon Colors
  * @param offset The first item that you will get
  * @param limit How many Pokemon Colors per page
  * @returns A list of Pokemon Colors
  */
  async listPokemonColors(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonColor}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Pokemon Forms
  * @param offset The first item that you will get
  * @param limit How many Pokemon Forms per page
  * @returns A list of Pokemon Forms
  */
  async listPokemonForms(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonForm}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Pokemon Habitats
  * @param offset The first item that you will get
  * @param limit How many Pokemon Habitats per page
  * @returns A list of Pokemon Habitats
  */
  async listPokemonHabitats(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonHabitat}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Pokemon Shapes
  * @param offset The first item that you will get
  * @param limit How many Pokemon Shapes per page
  * @returns A list of Pokemon Shapes
  */
  async listPokemonShapes(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonShape}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Pokemon Species
  * @param offset The first item that you will get
  * @param limit How many Pokemon Species per page
  * @returns A list of Pokemon Species
  */
  async listPokemonSpecies(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.PokemonSpecies}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Stats
  * @param offset The first item that you will get
  * @param limit How many Stats per page
  * @returns A list of Stats
  */
  async listStats(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Stat}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Types
  * @param offset The first item that you will get
  * @param limit How many Types per page
  * @returns A list of Types
  */
  async listTypes(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Type}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
};
__name(PokemonClient, "PokemonClient");

// src/clients/utility.client.ts
var UtilityClient = class extends BaseClient {
  constructor(clientOptions) {
    super(clientOptions);
  }
  /**
  * Get a Language by it's ID
  * @param id The Language ID
  * @returns Language
  */
  async getLanguageById(id) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Language}/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Language by it's name
  * @param name The Language name
  * @returns Language
  */
  async getLanguageByName(name) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Language}/${name}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * Get a Resource by it's url
  * @param url The Resource url
  * @returns Resource
  */
  async getResourceByUrl(url) {
    return new Promise((resolve, reject) => {
      this.api.get(url, {
        baseURL: ""
      }).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
  /**
  * List Languages
  * @param offset The first item that you will get
  * @param limit How many Languages per page
  * @returns A list of Languages
  */
  listLanguages(offset, limit) {
    return new Promise((resolve, reject) => {
      this.api.get(`${Endpoints.Language}?offset=${offset || 0}&limit=${limit || 20}`).then((response) => resolve(response.data)).catch((error) => reject(error));
    });
  }
};
__name(UtilityClient, "UtilityClient");

// src/clients/main.client.ts
var MainClient = class extends BaseClient {
  constructor(clientOptions) {
    super(clientOptions);
    this.berry = new BerryClient(clientOptions);
    this.contest = new ContestClient(clientOptions);
    this.encounter = new EncounterClient(clientOptions);
    this.evolution = new EvolutionClient(clientOptions);
    this.game = new GameClient(clientOptions);
    this.item = new ItemClient(clientOptions);
    this.location = new LocationClient(clientOptions);
    this.machine = new MachineClient(clientOptions);
    this.move = new MoveClient(clientOptions);
    this.pokemon = new PokemonClient(clientOptions);
  }
};
__name(MainClient, "MainClient");
export {
  BaseClient,
  BaseURL,
  Berries,
  BerryClient,
  BerryFirmnesses,
  BerryFlavors,
  constants_exports as Constants,
  ContestClient,
  ContestTypes,
  EggGroups,
  EncounterClient,
  EncounterConditionValues,
  EncounterConditions,
  EncounterMethods,
  Endpoints,
  EvolutionClient,
  EvolutionTriggers,
  GameClient,
  Genders,
  Generations,
  GrowthRates,
  ItemAttributes,
  ItemCategories,
  ItemClient,
  ItemFlingEffects,
  ItemPockets,
  Languages,
  LocationClient,
  MachineClient,
  MainClient,
  MoveAilmtents,
  MoveBattleStyles,
  MoveCategories,
  MoveClient,
  MoveDamageClasses,
  MoveLearnMethods,
  MoveTargets,
  Natures,
  PalParkAreas,
  PokeathlonStats,
  Pokedexes,
  PokemonClient,
  PokemonColors,
  PokemonHabitats,
  PokemonShapes,
  Regions,
  Stats,
  Types,
  UtilityClient,
  VersionGroups,
  Versions
};
//# sourceMappingURL=index.mjs.map