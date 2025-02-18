import pino from 'pino';
import { CacheOptions, AxiosCacheInstance } from 'axios-cache-interceptor';

/**
 * The name and the URL of the referenced resource
 */
interface NamedAPIResource {
    /** The name of the referenced resource */
    name: string;
    /** The URL of the referenced resource */
    url: string;
}
/**
 * Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API.
 * By default, a list "page" will contain up to 20 resources. If you would like to change this just add a 'limit' query parameter
 * to the GET request, e.g. ?=60. You can use 'offset' to move to the next page, e.g. ?limit=60&offset=60
 */
interface NamedAPIResourceList {
    /** The total number of resources available from this API */
    count: number;
    /** The URL for the next page in the list */
    next: string | null;
    /** The URL for the previous page in the list */
    previous: string | null;
    /** A list of named API resources */
    results: NamedAPIResource[];
}
/** An URL for another resource in the API */
interface APIResource {
    /** The URL of the referenced resource */
    url: string;
}

/**
 * The localized name for an API resource in a specific language
 */
interface Name {
    /** The localized name for an API resource in a specific language */
    name: string;
    /** The language this name is in */
    language: NamedAPIResource;
}

/**
 * Languages for translations of API resource information
 */
interface Language {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource  */
    name: string;
    /** Whether or not the games are published in this language */
    official: boolean;
    /** The two-letter code of the country where this language is spoken. Note that it is not unique */
    iso639: string;
    /** The two-letter code of the language. Note that it is not unique */
    iso3166: string;
    /** The name of this resource listed in different languages */
    names: Name[];
}

/**
 * The localized description for an API resource in a specific language
 */
interface Description {
    /** The localized description for an API resource in a specific language. */
    description: string;
    /** The language this name is in */
    language: NamedAPIResource;
}

/**
 * The localized effect text for an API resource in a specific language
 */
interface Effect {
    /** The localized effect text for an API resource in a specific language. */
    effect: string;
    /** The language this effect is in */
    language: NamedAPIResource;
}

/** Information of a pokemon encounter */
interface Encounter {
    /** The lowest level the Pokémon could be encountered at */
    min_level: number;
    /** The highest level the Pokémon could be encountered at */
    max_level: number;
    /** A list of condition values that must be in effect for this encounter to occur */
    condition_values: NamedAPIResource[];
    /** Percent chance that this encounter will occur */
    chance: number;
    /** The method by which this encounter happens */
    method: NamedAPIResource;
}

/**
 * The localized flavor text for an API resource in a specific language
 */
interface FlavorText {
    /** The localized flavor text for an API resource in a specific language */
    flavor_text: string;
    /** The language this name is in */
    language: NamedAPIResource;
}

/**
 * The generation relevent to this game index
 */
interface GenerationGameIndex {
    /** The internal id of an API resource within game data */
    game_index: number;
    /** The generation relevent to this game index */
    generation: NamedAPIResource;
}

/**
 * The machine that teaches a move from an item
 */
interface MachineVersionDetail {
    /** The machine that teaches a move from an item */
    machine: APIResource;
    /** The version group of this specific machine */
    version_group: NamedAPIResource;
}

/**
 * The localized effect for an API resource
 */
interface VerboseEffect {
    /** The localized effect text for an API resource in a specific language */
    effect: string;
    /** The localized effect text in brief */
    short_effect: string;
    /** The language this effect is in */
    language: NamedAPIResource;
}

/**
 * Encounters and their specifics details
 */
interface VersionEncounterDetail {
    /** The game version this encounter happens in */
    version: NamedAPIResource;
    /** The total percentage of all encounter potential */
    max_chance: number;
    /** A list of encounters and their specifics */
    encounter_details: Encounter[];
}
/**
 * The internal id and version of an API resource
 */
interface VersionGameIndex {
    /** The internal id of an API resource within game data */
    game_index: number;
    /** The version relevent to this game index */
    version: NamedAPIResource;
}
/**
 * The flavor text of an API resource
 */
interface VersionGroupFlavorText {
    /** The localized name for an API resource in a specific language */
    text: string;
    /** The language this name is in */
    language: NamedAPIResource;
    /** The version group which uses this flavor text */
    version_group: NamedAPIResource;
}

/**
 * ## Berry
 * Berries are small fruits that can provide HP and status condition restoration,
 * stat enhancement, and even damage negation when eaten by Pokémon.
 *
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail
 */
interface Berry {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked */
    growth_time: number;
    /** The maximum number of these berries that can grow on one tree in Generation IV */
    max_harvest: number;
    /** The power of the move "Natural Gift" when used with this Berry */
    natural_gift_power: number;
    /** The size of this Berry, in millimeters */
    size: number;
    /** The smoothness of this Berry, used in making Pokéblocks or Poffins */
    smoothness: number;
    /** The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly */
    soil_dryness: number;
    /** The firmness of this berry, used in making Pokéblocks or Poffins */
    firmness: NamedAPIResource;
    /** A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry */
    flavors: BerryFlavorMap[];
    /** Berries are actually items. This is a reference to the item specific data for this berry */
    item: NamedAPIResource;
    /** The type inherited by "Natural Gift" when used with this Berry */
    natural_gift_type: NamedAPIResource;
}
/**
 * Reference to the flavor a berry can have and the potency of each of those flavors in regard to this berry
 */
interface BerryFlavorMap {
    /** How powerful the referenced flavor is for this berry */
    potency: number;
    /** The referenced berry flavor */
    flavor: NamedAPIResource;
}
/**
 * ## Berry Flavor
 * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature.
 *
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
 */
interface BerryFlavor {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: 'spicy' | 'dry' | 'sweet' | 'bitter' | 'sour';
    /** A list of the berries with this flavor */
    berries: FlavorBerryMap[];
    /** The contest type that correlates with this berry flavor */
    contest_type: NamedAPIResource;
    /** The name of this resource listed in different languages */
    names: Name[];
}
/**
 * Berry with the given flavor
 */
interface FlavorBerryMap {
    /** How powerful the referenced flavor is for this berry */
    potency: number;
    /** The berry with the referenced flavor */
    berry: NamedAPIResource;
}
/**
 * ## Berry Firmness
 * Berries can be soft, very soft, hard, super hard or very hard.
 *
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail
 */
interface BerryFirmness {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: 'very-soft' | 'soft' | 'hard' | 'very-hard' | 'super-hard';
    /** A list of the berries with this firmness */
    berries: NamedAPIResource[];
    /** The name of this resource listed in different languages */
    names: Name[];
}

/**
 * ## Contest Type
 * Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail
 */
interface ContestType {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: 'cool' | 'beauty' | 'cute' | 'smart' | 'tough';
    /** The berry flavor that correlates with this contest type */
    berry_flavor: NamedAPIResource;
    /** The name of this contest type listed in different languages */
    names: ContestName[];
}
/**
 * The name of the given contest type
 */
interface ContestName {
    /** The name for this contest */
    name: string;
    /** The color associated with this contest's name */
    color: string;
    /** The language that this name is in */
    language: NamedAPIResource;
}
/**
 * ## Contest Effect
 * Contest effects refer to the effects of moves when used in contests
 */
interface ContestEffect {
    /** The identifier for this resource */
    id: number;
    /** The base number of hearts the user of this move gets */
    appeal: number;
    /** The base number of hearts the user's opponent loses */
    jam: number;
    /** The result of this contest effect listed in different languages */
    effect_entries: Effect[];
    /** The flavor text of this contest effect listed in different languages */
    flavor_text_entries: FlavorText[];
}
/**
 * ## Super Contest Effect
 * Super contest effects refer to the effects of moves when used in super contests.
 * A Pokémon Super Contest is an expanded format of the [Pokémon Contests](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Contest)
 * for the Generation IV games,
 * specifically in [Diamond, Pearl](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Diamond_and_Pearl_Versions),
 * and [Platinum](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Platinum_Version).
 * In it, Pokémon are rated on their appearance and performance, rather than strength.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Super_Contest)
 */
interface SuperContestEffect {
    /** The identifier for this resource */
    id: number;
    /** The level of appeal this super contest effect has */
    appeal: number;
    /** The flavor text of this super contest effect listed in different languages */
    flavor_text_entries: FlavorText[];
    /** A list of moves that have the effect when used in super contests */
    moves: NamedAPIResource[];
}

/**
 * ## Encounter Method
 * Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Wild_Pok%C3%A9mon) for greater detail.
 */
interface EncounterMethod {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** A good value for sorting */
    order: number;
    /** The name of this resource listed in different languages */
    names: Name[];
}
/**
 * ## Encounter Condition
 * Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 *  - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Time)
 */
interface EncounterCondition {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of possible values for this encounter condition */
    values: NamedAPIResource[];
}
/**
 * ## Encounter Condition Value
 * Encounter condition values are the various states that an encounter
 * condition can have, i.e., time of day can be either **day** or **night**
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Time)
 */
interface EncounterConditionValue {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The condition this encounter condition value pertains to */
    condition: NamedAPIResource;
    /** The name of this resource listed in different languages */
    names: Name[];
}

/**
 * Evolution Detail
 * All details regarding the specific details of the referenced Pokémon species evolution.
 */
interface EvolutionDetail {
    /** The item required to cause evolution this into Pokémon species. */
    item: NamedAPIResource | null;
    /** The type of event that triggers evolution into this Pokémon species. */
    trigger: NamedAPIResource;
    /** The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species. */
    gender: number | null;
    /** The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species. */
    held_item: NamedAPIResource | null;
    /** The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species. */
    known_move: NamedAPIResource | null;
    /** The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species. */
    known_move_type: NamedAPIResource | null;
    /** The location the evolution must be triggered at. */
    location: NamedAPIResource | null;
    /** The minimum required level of the evolving Pokémon species to evolve into this Pokémon species. */
    min_level: number | null;
    /** The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species. */
    min_happiness: number | null;
    /** The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species. */
    min_beauty: number | null;
    /** The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species. */
    min_affection: number | null;
    /** Whether or not it must be raining in the overworld to cause evolution this Pokémon species. */
    needs_overworld_rain: boolean;
    /** The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species. */
    party_species: NamedAPIResource | null;
    /**
     * The player must have a Pokémon of this type in their party during the evolution trigger event
     * in order for the evolving Pokémon species to evolve into this Pokémon species.
     */
    party_type: NamedAPIResource | null;
    /** The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. */
    relative_physical_stats: 1 | 0 | -1 | null;
    /** The required time of day. Day or night. */
    time_of_day: 'Day' | 'Night' | '';
    /** Pokémon species for which this one must be traded. */
    trade_species: NamedAPIResource | null;
    /** Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up. */
    turn_upside_down: boolean;
}
/**
 * ## Chain Link
 * Contains evolution details for a Pokémon in the chain.
 * Each link references the next Pokémon in the natural evolution order
 */
interface ChainLink {
    /** Whether or not this link is for a baby Pokémon. This would only ever be true on the base link */
    is_baby: boolean;
    /** The Pokémon species at this point in the evolution chain */
    species: NamedAPIResource;
    /** All details regarding the specific details of the referenced Pokémon species evolution */
    evolution_details: EvolutionDetail[];
    /** A List of chain objects */
    evolves_to: ChainLink[];
}
/**
 * ## Evolution Chain
 * Evolution chains are essentially family trees.
 * They start with the lowest stage within a family and detail
 * evolution conditions for each as well as Pokémon they can evolve
 * into up through the hierarchy.
 */
interface EvolutionChain {
    /** The identifier for this resource */
    id: number;
    /**
     * The item that a Pokémon would be holding when mating that would trigger
     * the egg hatching a baby Pokémon rather than a basic Pokémon
     */
    baby_trigger_item: NamedAPIResource | null;
    /**
     * The base chain link object. Each link contains evolution details for a Pokémon in the chain.
     * Each link references the next Pokémon in the natural evolution order
     */
    chain: ChainLink;
}
/**
 * ## Evolution Trigger
 * Evolution triggers are the events and conditions that cause a Pokémon to evolve.
 * There are numerous methods of evolution which define how and when Pokémon evolve.
 * Most Pokémon will evolve by leveling up while others evolve through specific means,
 * such as being traded, achieving a certain amount of friendship or leveling at certain times, among others.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
 */
interface EvolutionTrigger {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: 'level-up' | 'trade' | 'use-item' | 'shed' | 'other';
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of pokemon species that result from this evolution trigger. */
    pokemon_species: NamedAPIResource[];
}

/**
 * ## Generation
 * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include.
 * In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Generation) for greater details.
 */
interface Generation {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** A list of abilities that were introduced in this generation */
    abilities: NamedAPIResource[];
    /** The name of this resource listed in different languages */
    names: Name[];
    /** The main region travelled in this generation */
    main_region: NamedAPIResource;
    /** A list of moves that were introduced in this generation */
    moves: NamedAPIResource[];
    /** A list of Pokémon species that were introduced in this generation */
    pokemon_species: NamedAPIResource[];
    /** A list of types that were introduced in this generation */
    types: NamedAPIResource[];
    /** A list of version groups that were introduced in this generation */
    version_groups: NamedAPIResource[];
}

/**
 * Catalogued pokémon for pokedex
 */
interface PokemonEntry {
    /** The index of this Pokémon species entry within the Pokédex */
    entry_number: number;
    /** The Pokémon species being encountered */
    pokemon_species: NamedAPIResource;
}

/**
 * ## Pokedex
 * A Pokédex is a handheld electronic encyclopedia device;
 * one which is capable of recording and retaining information of the various Pokémon in a given region
 * with the exception of the national dex and some smaller dexes related to portions of a region.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex) for greater detail
 */
interface Pokedex {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** Whether or not this Pokédex originated in the main series of the video games */
    is_main_series: boolean;
    /** The description of this resource listed in different languages */
    descriptions: Description[];
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of Pokémon catalogued in this Pokédex and their indexes */
    pokemon_entries: PokemonEntry[];
    /** The region this Pokédex catalogues Pokémon for */
    region: NamedAPIResource | null;
    /** A list of version groups this Pokédex is relevant to */
    version_groups: NamedAPIResource[];
}

/**
 * ## Version
 * Versions of the games, e.g., Red, Blue or Yellow,
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Core_series) for greater details.
 */
interface Version {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** The version group this version belongs to */
    version_group: NamedAPIResource;
}
/**
 * ## Version Group
 * Version groups categorize highly similar versions of the games
 */
interface VersionGroup {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** Order for sorting. Almost by date of release, except similar versions are grouped together */
    order: number;
    /** The generation this version was introduced in */
    generation: NamedAPIResource;
    /** A list of methods in which Pokémon can learn moves in this version group */
    move_learn_methods: NamedAPIResource[];
    /** A list of Pokédexes introduces in this version group */
    pokedexes: NamedAPIResource[];
    /** A list of regions that can be visited in this version group */
    regions: NamedAPIResource[];
    /** The versions this version group owns */
    versions: NamedAPIResource[];
}

/**
 * Sprites used to depict the given item in the game
 */
interface ItemSprites {
    /** The default depiction of this item */
    default: string;
}
/**
 * Pokémon that might be found in the wild holding the given item
 */
interface ItemHolderPokemon {
    /** The Pokémon that holds this item */
    pokemon: NamedAPIResource;
    /** The details for the version that this item is held in by the Pokémon */
    version_details: ItemHolderPokemonVersionDetail[];
}
/**
 * The details for the version that the given item is held in by the Pokémon
 */
interface ItemHolderPokemonVersionDetail {
    /** How often this Pokémon holds this item in this version */
    rarity: number;
    /** The version that this item is held in by the Pokémon */
    version: NamedAPIResource;
}
/**
 * ## Item Attribute
 * Item attributes define particular aspects of items, e.g. "usable in battle" or "consumable"
 */
interface ItemAttribute {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** A list of items that have this attribute */
    items: NamedAPIResource[];
    /** The name of this item attribute listed in different languages */
    names: Name[];
    /** The description of this item attribute listed in different languages */
    descriptions: Description[];
}
/**
 * ## Item Category
 * Item categories determine where items will be placed in the players bag
 */
interface ItemCategory {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** A list of items that are a part of this category */
    items: NamedAPIResource[];
    /** The name of this item category listed in different languages */
    names: Name[];
    /** The pocket items in this category would be put in */
    pocket: NamedAPIResource;
}
/**
 * ## Item Fling Effect
 * The various effects of the move "Fling" when used with different items
 */
interface ItemFlingEffect {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The result of this fling effect listed in different languages */
    effect_entries: Effect[];
    /** A list of items that have this fling effect */
    items: NamedAPIResource[];
}
/**
 * ## Item Pocket
 * Pockets within the players bag used for storing items by category
 */
interface ItemPocket {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** A list of item categories that are relevant to this item pocket */
    categories: NamedAPIResource[];
    /** The name of this resource listed in different languages */
    names: Name[];
}
/**
 * ## Item
 * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner.
 * They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Item)
 */
interface Item {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The price of this item in stores */
    cost: number;
    /** The power of the move Fling when used with this item. */
    fling_power: number | null;
    /** The effect of the move Fling when used with this item */
    fling_effect: NamedAPIResource | null;
    /** A list of attributes this item has */
    attributes: NamedAPIResource[];
    /** The category of items this item falls into */
    category: NamedAPIResource;
    /** The effect of this ability listed in different languages */
    effect_entries: VerboseEffect[];
    /** The flavor text of this ability listed in different languages */
    flavor_text_entries: VersionGroupFlavorText[];
    /** A list of game indices relevent to this item by generation */
    game_indices: GenerationGameIndex[];
    /** The name of this item listed in different languages */
    names: Name[];
    /** A set of sprites used to depict this item in the game */
    sprites: ItemSprites;
    /** A list of Pokémon that might be found in the wild holding this item */
    held_by_pokemon: ItemHolderPokemon[];
    /** An evolution chain this item requires to produce a bay during mating */
    baby_trigger_for: APIResource | null;
    /** A list of the machines related to this item */
    machines: MachineVersionDetail[];
}

/**
 * Method in which Pokémon may be encountered in the given area
 * and how likely the method will occur depending on the version of the game
 */
interface EncounterMethodRate {
    /** The method in which Pokémon may be encountered in an area */
    encounter_method: NamedAPIResource;
    /** The chance of the encounter to occur on a version of the game */
    version_details: EncounterVersionDetails[];
}
/**
 * The chance of the encounter to occur on a version of the game
 */
interface EncounterVersionDetails {
    /** The chance of an encounter to occur */
    rate: number;
    /** The version of the game in which the encounter can occur with the given chance */
    version: NamedAPIResource;
}
/**
 * Describes a pokémon encounter in a given area
 */
interface PokemonEncounter {
    /** The Pokémon being encountered */
    pokemon: NamedAPIResource;
    /** A list of versions and encounters with Pokémon that might happen in the referenced location area */
    version_details: VersionEncounterDetail[];
}

/**
 * ## Location
 * Locations that can be visited within the games.
 * Locations make up sizable portions of regions, like cities or routes.
 * - Check the [List of Locations](https://bulbapedia.bulbagarden.net/wiki/List_of_locations_by_name)
 */
interface Location {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The region this location can be found in */
    region: NamedAPIResource | null;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of game indices relevent to this location by generation */
    game_indices: GenerationGameIndex[];
    /** Areas that can be found within this location */
    areas: NamedAPIResource[];
}
/**
 * ## Location Area
 * Location areas are sections of areas, such as floors in a building or cave.
 * Each area has its own set of possible Pokémon encounters.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Area) for more details.
 */
interface LocationArea {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The internal id of an API resource within game data */
    game_index: number;
    /** A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game */
    encounter_method_rates: EncounterMethodRate[];
    /** The region this location area can be found in */
    location: NamedAPIResource;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of Pokémon that can be encountered in this area along with version specific details about the encounter */
    pokemon_encounters: PokemonEncounter[];
}

/**
 * ## Pal Park Area
 * Areas used for grouping Pokémon encounters in Pal Park.
 * They're like habitats that are specific to Pal Park.
 * Pal Park is divided into five separate areas:
 * ---
 * - [Field](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Field)
 * - [Forest](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Forest)
 * - [Mountain](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Mountain)
 * - [Pond](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Pound)
 * - [Sea](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Sea)
 * - [Trivia](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Pal_Park_location#Trivia)
 * ---
 * Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pal_Park) for greater details.
 */
interface PalParkArea {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of Pokémon encountered in thi pal park area along with details */
    pokemon_encounters: PalParkEncounterSpecies[];
}
/**
 * Detais of a Pokémon encountered in thi Pal Park area
 */
interface PalParkEncounterSpecies {
    /** The base score given to the player when this Pokémon is caught during a pal park run */
    base_score: number;
    /** The base rate for encountering this Pokémon in this pal park area */
    rate: number;
    /** The Pokémon species being encountered */
    pokemon_species: NamedAPIResource;
}

/**
 * ## Region
 * A region is an organized area of the Pokémon world.
 * Most often, the main difference between regions is
 * the species of Pokémon that can be encountered within them.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Region) for greater details.
 */
interface Region {
    /** The identifier for this resource */
    id: number;
    /** A list of locations that can be found in this region */
    locations: NamedAPIResource[];
    /** The name for this resource */
    name: string;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** The generation this region was introduced in */
    main_generation: NamedAPIResource;
    /** A list of pokédexes that catalogue Pokémon in this region */
    pokedexes: NamedAPIResource[];
    /** A list of version groups where this region can be visited */
    version_groups: NamedAPIResource[];
}

/**
 * ## Machine
 * Machines are the representation of items that teach moves to Pokémon.
 * They vary from version to version, so it is not certain that one specific
 * [TM (Technical Machine)](https://bulbapedia.bulbagarden.net/wiki/TM) or
 * [HM (Hidden Machine)](https://bulbapedia.bulbagarden.net/wiki/HM) corresponds to a single Machine.
 */
interface Machine {
    /** The identifier for this resource */
    id: number;
    /** The TM or HM item that corresponds to this machine */
    item: NamedAPIResource;
    /** The move that is taught by this machine */
    move: NamedAPIResource;
    /** The version group that this machine applies to */
    version_group: NamedAPIResource;
}

/**
 * ## Ability
 * Abilities provide passive effects for Pokémon in battle or in the overworld.
 * Pokémon have multiple possible abilities but can have only one ability at a time.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
 */
interface Ability {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** Whether or not this ability originated in the main series of the video games */
    is_main_series: boolean;
    /** The generation this ability originated in */
    generation: NamedAPIResource;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** The effect of this ability listed in different languages */
    effect_entries: VerboseEffect[];
    /** The list of previous effects this ability has had across version groups */
    effect_changes: AbilityEffectChange[];
    /** The flavor text of this ability listed in different languages */
    flavor_text_entries: AbilityFlavorText[];
    /** A list of Pokémon that could potentially have this ability */
    pokemon: AbilityPokemon[];
}
/**
 * Previous effects an ability has had across version groups
 */
interface AbilityEffectChange {
    /** The previous effect of this ability listed in different languages */
    effect_entries: Effect[];
    /** The version group in which the previous effect of this ability originated */
    version_group: NamedAPIResource;
}
/**
 * The flavor text of an ability
 */
interface AbilityFlavorText {
    /** The localized name for an API resource in a specific language */
    flavor_text: string;
    /** The language this text resource is in */
    language: NamedAPIResource;
    /** The version group that uses this flavor text */
    version_group: NamedAPIResource;
}
/**
 * Pokémon that could potentially have the given ability
 */
interface AbilityPokemon {
    /** Whether or not this a hidden ability for the referenced Pokémon */
    is_hidden: boolean;
    /**
     * Pokémon have 3 ability 'slots' which hold references to possible abilities they could have.
     * This is the slot of this ability for the referenced pokemon
     */
    slot: number;
    /** The Pokémon this ability could belong to */
    pokemon: NamedAPIResource;
}

/**
 * ## Characteristic
 * Characteristics indicate which stat contains a Pokémon's highest IV.
 * A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo).
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail
 */
interface Characteristic {
    /** The identifier for this resource */
    id: number;
    /** The remainder of the highest stat/IV divided by 5 */
    gene_modulo: number;
    /** The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5 */
    possible_values: number[];
    /** The highest stat for the referenced characteristic */
    highest_stat: NamedAPIResource;
    /** Descriptions for the referenced characteristic */
    descriptions: Description[];
}

/**
 * ## Egg Group
 * Egg Groups are categories which determine which Pokémon are able to interbreed.
 * Pokémon may belong to either one or two Egg Groups.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater details.
 */
interface EggGroup {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: 'monster' | 'water1' | 'water2' | 'water3' | 'bug' | 'flying' | 'ground' | 'fairy' | 'plant' | 'humanshape' | 'mineral' | 'indeterminate' | 'ditto' | 'dragon' | 'no-eggs';
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of all Pokémon species that are members of this egg group */
    pokemon_species: NamedAPIResource[];
}

/**
 * ## Gender
 * Genders were introduced in Generation II for the purposes of breeding Pokémon
 * but can also result in visual differences or even different evolutionary lines.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Gender) for greater details.
 */
interface Gender {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: 'male' | 'female' | 'genderless';
    /** A list of Pokémon species that can be this gender and how likely it is that they will be */
    pokemon_species_details: PokemonSpeciesGender[];
    /** A list of Pokémon species that required this gender in order for a Pokémon to evolve into them */
    required_for_evolution: NamedAPIResource[];
}
/**
 * Pokémon species that can be this gender and how likely it is that they will be
 */
interface PokemonSpeciesGender {
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless */
    rate: number;
    /** A Pokémon species that can be the referenced gender */
    pokemon_species: NamedAPIResource;
}

/**
 * Levels and the amount of experienced needed to atain them based on the given growth rate.
 */
interface GrowthRateExperienceLevel {
    /** The level gained. */
    level: number;
    /** The amount of experience required to reach the referenced level. */
    experience: number;
}
/**
 * ## Growth Rate
 * Growth rates are the speed with which Pokémon gain levels through experience.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Experience) for greater details.
 */
interface GrowthRate {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: 'slow' | 'medium' | 'fast' | 'medium-slow' | 'slow-then-very-fast' | 'fast-then-very-slow';
    /** The formula used to calculate the rate at which the Pokémon species gains level */
    formula: string;
    /** The descriptions of this characteristic listed in different languages */
    descriptions: Description[];
    /** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
    levels: GrowthRateExperienceLevel[];
    /** A list of Pokémon species that gain levels at this growth rate */
    pokemon_species: NamedAPIResource[];
}

/**
 * ## Nature
 * Natures influence how a Pokémon's stats grow.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail
 */
interface Nature {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The stat decreased by 10% in Pokémon with this nature */
    decreased_stat: NamedAPIResource | null;
    /** The stat increased by 10% in Pokémon with this nature */
    increased_stat: NamedAPIResource | null;
    /** The flavor hated by Pokémon with this nature */
    hates_flavor: NamedAPIResource | null;
    /** The flavor liked by Pokémon with this nature */
    likes_flavor: NamedAPIResource | null;
    /** A list of Pokéathlon stats this nature effects and how much it effects them */
    pokeathlon_stat_changes: NatureStatChange[];
    /** A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent */
    move_battle_style_preferences: MoveBattleStylePreference[];
    /** The name of this resource listed in different languages */
    names: Name[];
}
/**
 * Pokéathlon stats a nature effects and how much it effects it
 */
interface NatureStatChange {
    /** The amount of change */
    max_change: -1 | 1 | -2 | 2;
    /** The stat being affected */
    pokeathlon_stat: NamedAPIResource;
}
/**
 * Battle Style and how likely a Pokémon with the given nature is to use them
 * in the Battle Palace or Battle Tent
 */
interface MoveBattleStylePreference {
    /** Chance of using the move, in percent, if HP is under one half */
    low_hp_preference: number;
    /** Chance of using the move, in percent, if HP is over one half */
    high_hp_preference: number;
    /** The move battle style */
    move_battle_style: NamedAPIResource;
}

/**
 * ## Pokeathlon Stat
 * Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons.
 * In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater details.
 */
interface PokeathlonStat {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: 'speed' | 'power' | 'skill' | 'stamina' | 'jump';
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A detail of natures which affect this Pokéathlon stat positively or negatively */
    affecting_natures: NaturePokeathlonStatAffectSets;
}
/**
 * A nature and how it change the referenced Pokéathlon stat
 */
interface NaturePokeathlonStatAffect {
    /** The maximum amount of change to the referenced Pokéathlon stat. */
    max_change: -1 | -2 | 1 | 2;
    /** The nature causing the change */
    nature: NamedAPIResource;
}
/**
 * A detail of natures which affect this Pokéathlon stat positively or negatively
 */
interface NaturePokeathlonStatAffectSets {
    /** A list of natures and how they change the referenced Pokéathlon stat */
    increase: NaturePokeathlonStatAffect[];
    /** A list of natures and how they change the referenced Pokéathlon stat */
    decrease: NaturePokeathlonStatAffect[];
}

/**
 * ## Stat
 * Stats determine certain aspects of battles. Each Pokémon has a value for each stat
 * which grows as they gain levels and can be altered momentarily by effects in battles
 */
interface Stat {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed' | 'accuracy' | 'evasion';
    /** ID the games use for this stat */
    game_index: number;
    /** Whether this stat only exists within a battle */
    is_battle_only: boolean;
    /** A detail of moves which affect this stat positively or negatively */
    affecting_moves: MoveStatAffectSets;
    /** A detail of natures which affect this stat positively or negatively */
    affecting_natures: NatureStatAffectSets;
    /** A list of characteristics that are set on a Pokémon when its highest base stat is this stat */
    characteristics: APIResource[];
    /** The class of damage this stat is directly related to */
    move_damage_class: NamedAPIResource | null;
    /** The name of this resource listed in different languages */
    names: Name[];
}
/**
 * A detail of nature which affect the given stat stat positively or negatively
 */
interface NatureStatAffectSets {
    /** A list of natures and how they change the referenced stat */
    increase: NamedAPIResource[];
    /** A list of nature sand how they change the referenced stat */
    decrease: NamedAPIResource[];
}
/**
 * Move and how it change the referenced stat
 */
interface MoveStatAffect {
    /** The maximum amount of change to the referenced stat */
    change: -1 | -2 | 1 | 2;
    /** The move causing the change */
    move: NamedAPIResource;
}
/**
 * A detail of moves which affect an stat positively or negatively
 */
interface MoveStatAffectSets {
    /** A list of moves and how they change the referenced stat */
    increase: MoveStatAffect[];
    /** A list of moves and how they change the referenced stat */
    decrease: MoveStatAffect[];
}

/**
 * Details of Pokémon for a specific type.
 */
interface TypePokemon {
    /** The order the Pokémon's types are listed in */
    slot: number;
    /** The Pokémon that has the referenced type */
    pokemon: NamedAPIResource;
}
/**
 * Detail of how effective a type is toward others and vice versa
 */
interface TypeRelations {
    /** A list of types this type has no effect on */
    no_damage_to: NamedAPIResource[];
    /** A list of types this type is not very effect against */
    half_damage_to: NamedAPIResource[];
    /** A list of types this type is very effect against */
    double_damage_to: NamedAPIResource[];
    /** A list of types that have no effect on this type */
    no_damage_from: NamedAPIResource[];
    /** A list of types that are not very effective against this type */
    half_damage_from: NamedAPIResource[];
    /** A list of types that are very effective against this type */
    double_damage_from: NamedAPIResource[];
}
/**
 * ## Type
 * Types are properties for Pokémon and their moves.
 * Each type has three properties: which types of Pokémon it is super effective against,
 * which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against
 */
interface Type {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** A detail of how effective this type is toward others and vice versa */
    damage_relations: TypeRelations;
    /** A list of game indices relevent to this item by generation */
    game_indices: GenerationGameIndex[];
    /** The generation this type was introduced in */
    generation: NamedAPIResource;
    /** The class of damage inflicted by this type */
    move_damage_class: NamedAPIResource;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of details of Pokémon that have this type */
    pokemon: TypePokemon[];
    /** A list of moves that have this type */
    moves: NamedAPIResource[];
}

/**
 * ## Pokemon
 * Pokémon are the creatures that inhabit the world of the Pokémon games.
 * They can be caught using Pokéballs and trained by battling with other Pokémon.
 * Each Pokémon belongs to a specific species but may take on a variant
 * which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
 */
interface Pokemon {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The base experience gained for defeating this Pokémon */
    base_experience: number;
    /** The height of this Pokémon in decimetres */
    height: number;
    /** Set for exactly one Pokémon used as the default for each species */
    is_default: boolean;
    /** Order for sorting. Almost national order, except families are grouped together */
    order: number;
    /** The weight of this Pokémon in hectograms */
    weight: number;
    /** A list of abilities this Pokémon could potentially have */
    abilities: PokemonAbility[];
    /** A list of forms this Pokémon can take on */
    forms: NamedAPIResource[];
    /** A list of game indices relevent to Pokémon item by generation */
    game_indices: VersionGameIndex[];
    /** A list of items this Pokémon may be holding when encountered */
    held_items: PokemonHeldItem[];
    /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
    location_area_encounters: string;
    /** A list of moves along with learn methods and level details pertaining to specific version groups */
    moves: PokemonMove[];
    /** A set of sprites used to depict this Pokémon in the game.
     * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
     */
    sprites: PokemonSprites;
    /** The species this Pokémon belongs to */
    species: NamedAPIResource;
    /** A list of base stat values for this Pokémon */
    stats: PokemonStat[];
    /** A list of details showing types this Pokémon has */
    types: PokemonType[];
    /** Data describing a Pokemon's types in a previous generation. */
    past_types: PokemonPastType[];
}
/**
 * Abilities the given pokémon could potentially have
 */
interface PokemonAbility {
    /** Whether or not this is a hidden ability */
    is_hidden: boolean;
    /** The slot this ability occupies in this Pokémon species */
    slot: number;
    /** The ability the Pokémon may have */
    ability: NamedAPIResource;
}
/**
 * Details showing types the given Pokémon has
 */
interface PokemonType {
    /** The order the Pokémon's types are listed in */
    slot: number;
    /** The type the referenced Pokémon has */
    type: NamedAPIResource;
}
/**
 * Data describing a Pokemon's types in a previous generation.
 */
interface PokemonPastType {
    /** The generation of this Pokémon Type. */
    generation: NamedAPIResource;
    /** Types this of this Pokémon in a previos generation. */
    types: PokemonType[];
}
/**
 * Items the given Pokémon may be holding when encountered
 */
interface PokemonHeldItem {
    /** The item the referenced Pokémon holds */
    item: NamedAPIResource;
    /** The details of the different versions in which the item is held */
    version_details: PokemonHeldItemVersion[];
}
/**
 * The details of the different versions in which the item is held
 */
interface PokemonHeldItemVersion {
    /** The version in which the item is held */
    version: NamedAPIResource;
    /** How often the item is held */
    rarity: number;
}
/**
 * A Move along with learn methods and level details pertaining to specific version groups
 */
interface PokemonMove {
    /** The move the Pokémon can learn */
    move: NamedAPIResource;
    /** The details of the version in which the Pokémon can learn the move */
    version_group_details: PokemonMoveVersion[];
}
/**
 * The details of the version in which the Pokémon can learn the move
 */
interface PokemonMoveVersion {
    /** The method by which the move is learned */
    move_learn_method: NamedAPIResource;
    /** The version group in which the move is learned */
    version_group: NamedAPIResource;
    /** The minimum level to learn the move */
    level_learned_at: number;
}
/**
 * Base stat values for the given Pokémon
 */
interface PokemonStat {
    /** The stat the Pokémon has */
    stat: NamedAPIResource;
    /** The effort points (EV) the Pokémon has in the stat */
    effort: number;
    /** The base value of the stat */
    base_stat: number;
}
/** Version Sprites */
interface VersionSprites {
    /** Generation-I Sprites of this Pokémon */
    'generation-i': GenerationISprites;
    /** Generation-II Sprites of this Pokémon */
    'generation-ii': GenerationIISprites;
    /** Generation-III Sprites of this Pokémon */
    'generation-iii': GenerationIIISprites;
    /** Generation-IV Sprites of this Pokémon */
    'generation-iv': GenerationIVSprites;
    /** Generation-V Sprites of this Pokémon */
    'generation-v': GenerationVSprites;
    /** Generation-VI Sprites of this Pokémon */
    'generation-vi': GenerationVISprites;
    /** Generation-VII Sprites of this Pokémon */
    'generation-vii': GenerationVIISprites;
    /** Generation-VIII Sprites of this Pokémon */
    'generation-viii': GenerationVIIISprites;
}
/**
 * A set of sprites used to depict this Pokémon in the game.
 * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
 */
interface PokemonSprites {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the front in battle */
    front_shiny_female: string | null;
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** Dream World, Official Artwork and Home sprites */
    other?: OtherPokemonSprites;
    /** Version Sprites of this Pokémon */
    versions: VersionSprites;
}
/** Other Pokemon Sprites (Dream World and Official Artwork sprites) */
interface OtherPokemonSprites {
    /** Dream World Sprites of this Pokémon */
    dream_world: DreamWorld;
    /** Official Artwork Sprites of this Pokémon */
    'official-artwork': OfficialArtwork;
    /** Home Artwork Sprites of this Pokémon */
    home: Home;
}
/** Dream World sprites */
interface DreamWorld {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
}
/** Official Artwork sprites */
interface OfficialArtwork {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
}
/** Home sprites */
interface Home {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}
/** Generation-I Srites */
interface GenerationISprites {
    /** Red-blue sprites of this Pokémon */
    'red-blue': RedBlue;
    /** Yellow sprites of this Pokémon  */
    yellow: Yellow;
}
/** Red/Blue Sprites */
interface RedBlue {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The gray depiction of this Pokémon from the back in battle */
    back_gray: string | null;
    /** The transparent depiction of this Pokémon from the back in battle */
    back_transparent: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The gray depiction of this Pokémon from the front in battle */
    front_gray: string | null;
    /** The transparent depiction of this Pokémon from the front in battle */
    front_transparent: string | null;
}
/** Yellow sprites */
interface Yellow {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The gray depiction of this Pokémon from the back in battle */
    back_gray: string | null;
    /** The transparent depiction of this Pokémon from the back in battle */
    back_transparent: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The gray depiction of this Pokémon from the front in battle */
    front_gray: string | null;
    /** The transparent depiction of this Pokémon from the front in battle */
    front_transparent: string | null;
}
/** Generation-II Sprites */
interface GenerationIISprites {
    /** Crystal sprites of this Pokémon */
    crystal: Crystal;
    /** Gold sprites of this Pokémon */
    gold: Gold;
    /** Silver sprites of this Pokémon */
    silver: Silver;
}
/** Crystal sprites */
interface Crystal {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The back shiny transparent depiction of this Pokémon from the back in battle */
    back_shiny_transparent: string | null;
    /** The transparent depiction of this Pokémon from the back in battle */
    back_transparent: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The front shiny transparent depiction of this Pokémon from the front in battle */
    front_shiny_transparent: string | null;
    /** The transparent depiction of this Pokémon from the front in battle */
    front_transparent: string | null;
}
interface Gold {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The transparent depiction of this Pokémon from the front in battle */
    front_transparent: string | null;
}
/** Silver sprites */
interface Silver {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The transparent depiction of this Pokémon from the front in battle */
    front_transparent: string | null;
}
/** Generation-III Sprites */
interface GenerationIIISprites {
    /** Emerald sprites of this Pokémon */
    emerald: Emerald;
    /** Firered-Leafgreen sprites of this Pokémon */
    'firered-leafgreen': FireredLeafgreen;
    /** Ruby-Sapphire sprites of this Pokémon */
    'ruby-sapphire': RubySapphire;
}
/** Emerald sprites */
interface Emerald {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
}
/** FireRead LeafGreen sprites  */
interface FireredLeafgreen {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
}
/** Ruby/Sapphire sprites */
interface RubySapphire {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
}
/** Generation-IV Sprites */
interface GenerationIVSprites {
    /** Diamond-pearl Generation sprites of this Pokémon */
    'diamond-pearl': DiamondPearl;
    /** Heartgold-Soulsilver sprites of this Pokémon */
    'heartgold-soulsilver': HeartgoldSoulsilver;
    /** Platinum sprites of this Pokémon */
    platinum: Platinum;
}
interface DiamondPearl {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}
interface HeartgoldSoulsilver {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}
interface Platinum {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}
/** Generation-V Sprites */
interface GenerationVSprites {
    /** Black-white sprites of this Pokémon */
    'black-white': BlackWhite;
}
/** Black/White sprites */
interface BlackWhite {
    /** The animated sprite of this pokémon */
    animated: Animated;
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}
interface Animated {
    /** The default depiction of this Pokémon from the back in battle */
    back_default: string | null;
    /** The shiny depiction of this Pokémon from the back in battle */
    back_shiny: string | null;
    /** The female depiction of this Pokémon from the back in battle */
    back_female: string | null;
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    back_shiny_female: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}
/** Generation-VI Sprites */
interface GenerationVISprites {
    /** Omegaruby-Alphasapphire sprites of this Pokémon */
    'omegaruby-alphasapphire': OmegarubyAlphasapphire;
    /** X-Y sprites of this Pokémon */
    'x-y': XY;
}
/** Omega/Ruby Alpha/Sapphire sprites */
interface OmegarubyAlphasapphire {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}
/** XY sprites */
interface XY {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}
/** Generation-VII Sprites */
interface GenerationVIISprites {
    /** Icon sprites of this Pokémon */
    icons: GenerationViiIcons;
    /** Ultra-sun-ultra-moon sprites of this Pokémon */
    'ultra-sun-ultra-moon': UltraSunUltraMoon;
}
/** Generation VII icons */
interface GenerationViiIcons {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
}
/** Ultra Sun Ultra Moon sprites */
interface UltraSunUltraMoon {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
    /** The shiny depiction of this Pokémon from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon from the back in battle */
    front_shiny_female: string | null;
}
/** Generation-VIII Sprites */
interface GenerationVIIISprites {
    /** Icon sprites of this Pokémon */
    icons: GenerationViiiIcons;
}
/** Generation VIII icons */
interface GenerationViiiIcons {
    /** The default depiction of this Pokémon from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon from the front in battle */
    front_female: string | null;
}
/**
 * ## Location Area Encounter
 * Pokémon location areas where Pokémon can be found
 */
interface LocationAreaEncounter {
    /** The location area the referenced Pokémon can be encountered in */
    location_area: NamedAPIResource;
    /** A list of versions and encounters with the referenced Pokémon that might happen */
    version_details: VersionEncounterDetail[];
}
/**
 * ## Pokemon Colors
 * Colors used for sorting Pokémon in a Pokédex.
 * The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body.
 * No orange category exists; Pokémon that are primarily orange are listed as red or brown.
 */
interface PokemonColor {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: 'black' | 'blue' | 'brown' | 'gray' | 'green' | 'pink' | 'purple' | 'red' | 'white' | 'yellow';
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of the Pokémon species that have this color */
    pokemon_species: NamedAPIResource[];
}
/**
 * ## Pokemon Form
 * Some Pokémon may appear in one of multiple, visually different forms.
 * These differences are purely cosmetic. For variations within a Pokémon species,
 * which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
 */
interface PokemonForm {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The order in which forms should be sorted within all forms.
     * Multiple forms may have equal order, in which case they should fall back on sorting by name
     */
    order: number;
    /** The order in which forms should be sorted within a species' forms */
    form_order: number;
    /** True for exactly one form used as the default for each Pokémon */
    is_default: boolean;
    /** Whether or not this form can only happen during battle */
    is_battle_only: boolean;
    /** Whether or not this form requires mega evolution */
    is_mega: boolean;
    /** The name of this form */
    form_name: string;
    /** The Pokémon that can take on this form */
    pokemon: NamedAPIResource;
    /** A set of sprites used to depict this Pokémon form in the game */
    sprites: PokemonFormSprites;
    /** The version group this Pokémon form was introduced in */
    version_group: NamedAPIResource;
    /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name */
    names: Name[];
    /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name */
    form_names: Name[];
    /** A list of details showing types this Pokémon has */
    types: PokemonType[];
}
/**
 * Sprites used to depict this Pokémon form in the game
 */
interface PokemonFormSprites {
    /** The default depiction of this Pokémon form from the front in battle */
    front_default: string | null;
    /** The female depiction of this Pokémon form from the front in battle */
    front_female: string | null;
    /** The shiny depiction of this Pokémon form from the front in battle */
    front_shiny: string | null;
    /** The shiny female depiction of this Pokémon form from the front in battle */
    front_shiny_female: string | null;
    /** The default depiction of this Pokémon form from the back in battle */
    back_default: string | null;
    /** The female depiction of this Pokémon form from the back in battle */
    back_female: string | null;
    /** The shiny depiction of this Pokémon form from the back in battle */
    back_shiny: string | null;
    /** The shiny female depiction of this Pokémon form from the back in battle */
    back_shiny_female: string | null;
}
/**
 * ## Pokemon Habitat
 * Habitats are generally different terrain Pokémon can be found in
 * but can also be areas designated for rare or legendary Pokémon
 */
interface PokemonHabitat {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: 'cave' | 'forest' | 'grassland' | 'mountain' | 'rare' | 'rough-terrain' | 'sea' | 'urban' | 'waters-edge';
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of the Pokémon species that can be found in this habitat */
    pokemon_species: NamedAPIResource[];
}
/**
 * ## Pokemon Shape
 * Shapes used for sorting Pokémon in a Pokédex
 */
interface PokemonShape {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The "scientific" name of this Pokémon shape listed in different languages */
    awesome_names: AwesomeName[];
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of the Pokémon species that have this shape */
    pokemon_species: NamedAPIResource[];
}
/**
 * The "scientific" name of the Pokémon shape listed in different languages
 */
interface AwesomeName {
    /** The localized "scientific" name for an API resource in a specific language */
    awesome_name: string;
    /** The language this "scientific" name is in */
    language: NamedAPIResource;
}
/**
 * ## Pokemon Species
 * A Pokémon Species forms the basis for at least one Pokémon.
 * Attributes of a Pokémon species are shared across all varieties of Pokémon within the species.
 * A good example is Wormadam; Wormadam is the species which can be found in three different varieties,
 * Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant */
interface PokemonSpecies {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage */
    order: number;
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless */
    gender_rate: number;
    /** The base capture rate; up to 255. The higher the number, the easier the catch */
    capture_rate: number;
    /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon */
    base_happiness: number;
    /** Whether or not this is a baby Pokémon */
    is_baby: boolean;
    /** Whether or not this is a legendary Pokémon */
    is_legendary: boolean;
    /** Whether or not this is a mythical Pokémon */
    is_mythical: boolean;
    /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's */
    hatch_counter: number;
    /** Whether or not this Pokémon has visual gender differences */
    has_gender_differences: boolean;
    /** Whether or not this Pokémon has multiple forms and can switch between them */
    forms_switchable: boolean;
    /** The rate at which this Pokémon species gains levels */
    growth_rate: NamedAPIResource;
    /** A list of Pokedexes and the indexes reserved within them for this Pokémon species */
    pokedex_numbers: PokemonSpeciesDexEntry[];
    /** A list of egg groups this Pokémon species is a member of */
    egg_groups: NamedAPIResource[];
    /** The color of this Pokémon for Pokédex search */
    color: NamedAPIResource;
    /** The shape of this Pokémon for Pokédex search */
    shape: NamedAPIResource;
    /** The Pokémon species that evolves into this Pokemon_species */
    evolves_from_species: NamedAPIResource;
    /** The evolution chain this Pokémon species is a member of */
    evolution_chain: APIResource;
    /** The habitat this Pokémon species can be encountered in */
    habitat: NamedAPIResource;
    /** The generation this Pokémon species was introduced in */
    generation: NamedAPIResource;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of encounters that can be had with this Pokémon species in pal park */
    pal_park_encounters: PalParkEncounterArea[];
    /** A list of flavor text entries for this Pokémon species */
    flavor_text_entries: FlavorText[];
    /** Descriptions of different forms Pokémon take on within the Pokémon species */
    form_descriptions: Description[];
    /** The genus of this Pokémon species listed in multiple languages */
    genera: Genus[];
    /** A list of the Pokémon that exist within this Pokémon species */
    varieties: PokemonSpeciesVariety[];
}
/**
 * The genus of the given Pokémon species listed in multiple languages
 */
interface Genus {
    /** The localized genus for the referenced Pokémon species */
    genus: string;
    /** The language this genus is in */
    language: NamedAPIResource;
}
/** Pokedexes and the indexes reserved within them for the given Pokémon species */
interface PokemonSpeciesDexEntry {
    /** The index number within the Pokédex */
    entry_number: number;
    /** The Pokédex the referenced Pokémon species can be found in */
    pokedex: NamedAPIResource;
}
/**
 * Encounter that can be had with the given Pokémon species in pal park
 */
interface PalParkEncounterArea {
    /** The base score given to the player when the referenced Pokémon is caught during a pal park run */
    base_score: number;
    /** The base rate for encountering the referenced Pokémon in this pal park area */
    rate: number;
    /** The pal park area where this encounter happens */
    area: NamedAPIResource;
}
/**
 * Pokémons that exist within this Pokémon species
 */
interface PokemonSpeciesVariety {
    /** Whether this variety is the default variety */
    is_default: boolean;
    /** The Pokémon variety */
    pokemon: NamedAPIResource;
}

/**
 * ## Move Target
 * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
 */
interface MoveTarget {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** A list of moves that that are directed at this target. */
    moves: NamedAPIResource[];
    /** The name of this resource listed in different languages. */
    names: Name[];
}
/**
 * ## Move Learn Method
 * Methods by which Pokémon can learn moves.
 */
interface MoveLearnMethod {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of version groups where moves can be learned through this method. */
    version_groups: NamedAPIResource[];
}
/**
 * ## Move Damage Class
 * Damage classes moves can have, e.g. physical, special, or non-damaging.
 */
interface MoveDamageClass {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** A list of moves that fall into this damage class. */
    moves: NamedAPIResource[];
    /** The name of this resource listed in different languages. */
    names: Name[];
}
/**
 * ## Move Category
 * Very general categories that loosely group move effects.
 */
interface MoveCategory {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of moves that fall into this category. */
    moves: NamedAPIResource[];
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
}
/**
 * ## Move Battle Style
 * Styles of moves when used in the Battle Palace.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater details.
 */
interface MoveBattleStyle {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: 'attack' | 'defense' | 'support';
    /** The name of this resource listed in different languages. */
    names: Name[];
}
/**
 * ## Move Ailment
 * Move Ailments are status conditions caused by moves used during battle.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater details.
 */
interface MoveAilment {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of moves that cause this ailment. */
    moves: NamedAPIResource[];
    /** The name of this resource listed in different languages. */
    names: Name[];
}
interface PastMoveStatValues {
    /** The percent value of how likely this move is to be successful. */
    accuracy: number | null;
    /** The percent value of how likely it is this moves effect will take effect. */
    effect_chance: number | null;
    /** The base power of this move with a value of 0 if it does not have a base power. */
    power: number | null;
    /** Power points. The number of times this move can be used. */
    pp: number | null;
    /** The effect of this move listed in different languages. */
    effect_entries: VerboseEffect[];
    /** The elemental type of this move. */
    type: NamedAPIResource | null;
    /** The version group in which these move stat values were in effect. */
    version_group: NamedAPIResource;
}
/** */
interface MoveStatChange {
    /** The amount of change. */
    change: number;
    /** The stat being affected. */
    stat: NamedAPIResource;
}
/**
 * Metadata about this move
 */
interface MoveMetaData {
    /** The status ailment this move inflicts on its target. */
    ailment: NamedAPIResource;
    /** The category of move this move falls under, e.g. damage or ailment. */
    category: NamedAPIResource;
    /** The minimum number of times this move hits. Null if it always only hits once. */
    min_hits: number | null;
    /** The maximum number of times this move hits. Null if it always only hits once. */
    max_hits: number | null;
    /** The minimum number of turns this move continues to take effect. Null if it always only lasts one turn. */
    min_turns: number | null;
    /** The maximum number of turns this move continues to take effect. Null if it always only lasts one turn. */
    max_turns: number | null;
    /** HP drain (if positive) or Recoil damage (if negative), in percent of damage done. */
    drain: number;
    /** The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP. */
    healing: number;
    /**  Critical hit rate bonus. */
    crit_rate: number;
    /** The likelihood this attack will cause an ailment. */
    ailment_chance: number;
    /** The likelihood this attack will cause the target Pokémon to flinch. */
    flinch_chance: number;
    /** The likelihood this attack will cause a stat change in the target Pokémon. */
    stat_chance: number;
}
/**
 * The flavor text of this move.
 */
interface MoveFlavorText {
    /** The localized flavor text for an api resource in a specific language. */
    flavor_text: string;
    /** The language this name is in. */
    language: NamedAPIResource;
    /** The version group that uses this flavor text. */
    version_group: NamedAPIResource;
}
/**
 * A detail of moves this move can be used before or after, granting additional appeal points in super contests.
 */
interface ContestComboDetail {
    /** A list of moves to use before this move. */
    use_before: NamedAPIResource[] | null;
    /** A list of moves to use after this move. */
    use_after: NamedAPIResource[] | null;
}
/**
 * A detail of normal and super contest combos that require this move.
 */
interface ContestComboSets {
    /** A detail of moves this move can be used before or after, granting additional appeal points in contests. */
    normal: ContestComboDetail;
    /** A detail of moves this move can be used before or after, granting additional appeal points in super contests. */
    super: ContestComboDetail;
}
/**
 * ## Move
 * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn.
 * Some moves (including those learned by Hidden Machine) can be used outside of battle as well,
 * usually for the purpose of removing obstacles or exploring new areas.
 * - See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Move) for greater detaill
 */
interface Move {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The percent value of how likely this move is to be successful */
    accuracy: number | null;
    /** The percent value of how likely it is this moves effect will happen */
    effect_chance: number | null;
    /** Power points. The number of times this move can be used */
    pp: number | null;
    /**
     * A value between -8 and 8. Sets the order in which moves are executed during battle.
     * See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Priority) for greater detail
     */
    priority: -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    /** The base power of this move with a value of 0 if it does not have a base power */
    power: number | null;
    /** A detail of normal and super contest combos that require this move */
    contest_combos: ContestComboSets | null;
    /** The type of appeal this move gives a Pokémon when used in a contest */
    contest_types: NamedAPIResource | null;
    /** The effect the move has when used in a contest */
    contest_effect: APIResource | null;
    /** The type of damage the move inflicts on the target, e.g. physical */
    damage_class: NamedAPIResource | null;
    /** The effect of this move listed in different languages */
    effect_entries: VerboseEffect[];
    /** The list of previous effects this move has had across version groups of the games */
    effect_changes: AbilityEffectChange[];
    /** The flavor text of this move listed in different languages */
    flavor_text_entries: MoveFlavorText[];
    /** The generation in which this move was introduced */
    generation: NamedAPIResource;
    /** A list of the machines that teach this move */
    machines: MachineVersionDetail[];
    /** Metadata about this move */
    meta: MoveMetaData | null;
    /** The name of this resource listed in different languages */
    names: Name[];
    /** A list of move resource value changes across version groups of the game */
    past_values: PastMoveStatValues[];
    /** A list of stats this moves effects and how much it effects them */
    stat_changes: MoveStatChange[];
    /** The effect the move has when used in a super contest */
    super_contest_effect: APIResource | null;
    /** The type of target that will receive the effects of the attack */
    target: NamedAPIResource;
    /** The elemental type of this move */
    type: NamedAPIResource;
    /** A list of Pokémons that learned this move */
    learned_by_pokemon: NamedAPIResource[];
}

/**
 * ## Client Args
 * Used to pass optional configuration for logging and cache to the clients.
 */
interface ClientArgs {
    /**
     * ## Logger Options
     * Options for the client logger.
     * @see https://getpino.io/#/docs/api?id=options
     */
    logOptions?: pino.LoggerOptions;
    /**
     * ## Axios Cache Options
     * Options for cache.
     * @see https://github.com/RasCarlito/axios-cache-adapter
     */
    cacheOptions?: CacheOptions;
    /**
     * ## Base URL
     * Location of the PokéAPI. Leave empty to use the official PokéAPI instance.
     */
    baseURL?: string;
}
/**
 * ### Base Client
 */
declare class BaseClient {
    protected api: AxiosCacheInstance;
    private logger;
    /**
     *
     */
    constructor(clientOptions?: ClientArgs);
}

/**
 * ### Berry Client
 *
 * Client used to access the Berry Endpoints:
 *  - [Berries](https://pokeapi.co/docs/v2#berries)
 *  - [Berry Firmnesses](https://pokeapi.co/docs/v2#berry-firmnesses)
 *  - [Berry Flavors](https://pokeapi.co/docs/v2#berry-flavors)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#berries-section)
 */
declare class BerryClient extends BaseClient {
    constructor(clientOptions?: ClientArgs);
    /**
     * Get a Berry by it's name
     * @param name The berry name
     * @returns A Berry
     */
    getBerryByName(name: string): Promise<Berry>;
    /**
     * Get a Berry by it's ID
     * @param id The Berry ID
     * @returns A Berry
     */
    getBerryById(id: number): Promise<Berry>;
    /**
     * Get a Berry Firmness by it's ID
     * @param id The Berry ID
     * @returns Berry Firmness
     */
    getBerryFirmnessById(id: number): Promise<BerryFirmness>;
    /**
     * Get a Berry Firmness by it's ID
     * @param name The Berry name
     * @returns Berry Firmness
     */
    getBerryFirmnessByName(name: string): Promise<BerryFirmness>;
    /**
     * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature.
     * Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
     * @param id The Berry Flavor ID
     * @returns Berry Flavor
     */
    getBerryFlavorById(id: number): Promise<BerryFlavor>;
    /**
     * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their nature.
     * Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
     * @param name The Berry Flavor name
     * @returns Berry Flavor
     */
    getBerryFlavorByName(name: string): Promise<BerryFlavor>;
    /**
     * List Berries
     * @param offset The first item that you will get
     * @param limit How many berries per page
     * @returns A list of berries
     */
    listBerries(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Berries
     * @param offset The first item that you will get
     * @param limit How many berry firmnesses per page
     * @returns A list of berry firmnesses
     */
    listBerryFirmnesses(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Berry Flavors
     * @param offset The first item that you will get
     * @param limit How many Berry Flavors per page
     * @returns A list of Berry Flavors
     */
    listBerryFlavors(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
}

/**
 * ### Contest Client
 *
 * Client used to access the Contest Endpoints:
 *  - [Contest Types](https://pokeapi.co/docs/v2#contest-types)
 *  - [Contest Effects](https://pokeapi.co/docs/v2#contest-effects)
 *  - [Super Contest Effects](https://pokeapi.co/docs/v2#super-contest-effects)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#contests-section)
 */
declare class ContestClient extends BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions?: ClientArgs);
    /**
     * Get a Contest Type by it's name
     * @param name  The contest type name
     * @returns A Contest Type
     */
    getContestTypeByName(name: string): Promise<ContestType>;
    /**
     * Get a Contest Type by it's ID
     * @param id The Contest Type ID
     * @returns A Contest Type
     */
    getContestTypeById(id: number): Promise<ContestType>;
    /**
     * Get a Contest Effect by it's ID
     * @param id The Contest Effect ID
     * @returns Contest Effect
     */
    getContestEffectById(id: number): Promise<ContestEffect>;
    /**
     * Get a Super Contest Effect by it's ID
     * @param id The Super Contest Effect ID
     * @returns Super Contest Effect
     */
    getSuperContestEffectById(id: number): Promise<SuperContestEffect>;
    /**
     * List Contest Types
     * @param offset The first item that you will get
     * @param limit How many contest types per page
     * @returns A list of contest types
     */
    listContestTypes(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Contest Effects
     * @param offset The first item that you will get
     * @param limit How many contest effects per page
     * @returns A list of contest effects
     */
    listContestEffects(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Super Contest Effects
     * @param offset The first item that you will get
     * @param limit How many Super Contest Effect per page
     * @returns A list of Super Contest Effect
     */
    listSuperContestEffects(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
}

/**
 * ### Encounter Client
 *
 * Client used to access the Encounter Endpoints:
 *  - [Encounter Methods](https://pokeapi.co/docs/v2#encounter-methods)
 *  - [Encounter Conditions](https://pokeapi.co/docs/v2#encounter-conditions)
 *  - [Encounter Condition Values](https://pokeapi.co/docs/v2#encounter-condition-values)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#encounters-section)
 */
declare class EncounterClient extends BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions?: ClientArgs);
    /**
     * Get an Encounter Method by it's name
     * @param name The Encounter Method name
     * @returns An Encounter Method
     */
    getEncounterMethodByName(name: string): Promise<EncounterMethod>;
    /**
     * Get an Encounter Method by it's ID
     * @param id The Encounter Method ID
     * @returns An Encounter Method
     */
    getEncounterMethodById(id: number): Promise<EncounterMethod>;
    /**
     * Get an Encounter Condition by it's ID
     * @param id The Encounter Condition ID
     * @returns An Encounter Condition
     */
    getEncounterConditionById(id: number): Promise<EncounterCondition>;
    /**
     * Get an Encounter Condition by it's name
     * @param name The Encounter Condition name
     * @returns An Encounter Condition
     */
    getEncounterConditionByName(name: string): Promise<EncounterCondition>;
    /**
     * Get an Encounter Condition Value by it's name
     * @param name The Encounter Condition Value name
     * @returns An Encounter Condition Value
     */
    getEncounterConditionValueByName(name: string): Promise<EncounterConditionValue>;
    /**
     * Get an Encounter Condition Value by it's ID
     * @param id The Encounter Condition Value ID
     * @returns An Encounter Condition Value
     */
    getEncounterConditionValueById(id: number): Promise<EncounterConditionValue>;
    /**
     * List Encounter Methods
     * @param offset The first item that you will get
     * @param limit How many Encounter Methods per page
     * @returns A list of Encounter Methods
     */
    listEncounterMethods(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Encounter Conditions
     * @param offset The first item that you will get
     * @param limit How many Encounter Conditions per page
     * @returns A list of Encounter Methods
     */
    listEncounterConditions(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Encounter Condition Values
     * @param offset The first item that you will get
     * @param limit How many Encounter Condition Values per page
     * @returns A list of Encounter Condition Values
     */
    listEncounterConditionValues(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
}

/**
 * ### Evolution Client
 *
 * Client used to access the Berry Endpoints:
 *  - [Evolution Chains](https://pokeapi.co/docs/v2#evolution-chains)
 *  - [Evolution Triggers](https://pokeapi.co/docs/v2#evolution-triggers)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#evolution-section)
 */
declare class EvolutionClient extends BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions?: ClientArgs);
    /**
     * Get an Evolution Chain by it's ID
     * @param id The Evolution Chain ID
     * @returns An Evolution Chain
     */
    getEvolutionChainById(id: number): Promise<EvolutionChain>;
    /**
     * Get an Evolution Trigger by it's ID
     * @param id The Evolution Trigger ID
     * @returns An Evolution Trigger
     */
    getEvolutionTriggerById(id: number): Promise<EvolutionTrigger>;
    /**
     * Get an Evolution Trigger by it's name
     * @param name The Evolution Trigger name
     * @returns An Evolution Trigger
     */
    getEvolutionTriggerByName(name: string): Promise<EvolutionTrigger>;
    /**
     * List Evolution Chains
     * @param offset The first item that you will get
     * @param limit How many Evolution Chains per page
     * @returns A list of Evolution Chains
     */
    listEvolutionChains(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Evolution Triggers
     * @param offset The first item that you will get
     * @param limit How many Evolution Triggers per page
     * @returns A list of Evolution Triggers
     */
    listEvolutionTriggers(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
}

/**
 * ### Game Client
 *
 * Client used to access the Game Endpoints:
 *  - [Generations](https://pokeapi.co/docs/v2#generations)
 *  - [Pokedexes](https://pokeapi.co/docs/v2#pokedexes)
 *  - [Versions](https://pokeapi.co/docs/v2#version)
 *  - [Version Groups](https://pokeapi.co/docs/v2#version-groups)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#games-section)
 */
declare class GameClient extends BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions?: ClientArgs);
    /**
     * Get a Generation by it's name
     * @param name The generation name
     * @returns A Generation
     */
    getGenerationByName(name: string): Promise<Generation>;
    /**
     * Get a Generation by it's ID
     * @param id The generation ID
     * @returns A Generation
     */
    getGenerationById(id: number): Promise<Generation>;
    /**
     * Get a Pokedex by it's name
     * @param name The pokedex name
     * @returns A Pokedex
     */
    getPokedexByName(name: string): Promise<Pokedex>;
    /**
     * Get a Pokedex by it's ID
     * @param id The pokedex ID
     * @returns A Pokedex
     */
    getPokedexById(id: number): Promise<Pokedex>;
    /**
     * Get a Version by it's name
     * @param name The version name
     * @returns A Version
     */
    getVersionByName(name: string): Promise<Version>;
    /**
     * Get a Version by it's ID
     * @param id The version ID
     * @returns A Version
     */
    getVersionById(id: number): Promise<Version>;
    /**
     * Get a Version Group by it's name
     * @param name The version group name
     * @returns A Version Group
     */
    getVersionGroupByName(name: string): Promise<VersionGroup>;
    /**
     * Get a Version Group by it's ID
     * @param id The version group ID
     * @returns A Version Group
     */
    getVersionGroupById(id: number): Promise<VersionGroup>;
    /**
     * List Generations
     * @param offset The first item that you will get
     * @param limit How many Generations per page
     * @returns A list of Generations
     */
    listGenerations(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Pokedexes
     * @param offset The first item that you will get
     * @param limit How many Pokedexes per page
     * @returns A list of Pokedexes
     */
    listPokedexes(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Versions
     * @param offset The first item that you will get
     * @param limit How many Versions per page
     * @returns A list of Versions
     */
    listVersions(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Version Groups
     * @param offset The first item that you will get
     * @param limit How many Version Groups per page
     * @returns A list of Version Groups
     */
    listVersionGroups(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
}

/**
 * ### Item Client
 *
 * Client used to access the Item Endpoints:
 *  - [Item](https://pokeapi.co/docs/v2#item)
 *  - [Item Attributes](https://pokeapi.co/docs/v2#item-attributes)
 *  - [Item Categories](https://pokeapi.co/docs/v2#item-categories)
 *  - [Item Filing Effects](https://pokeapi.co/docs/v2#item-fling-effects)
 *  - [Item Pockets](https://pokeapi.co/docs/v2#item-pockets)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#items-section)
 */
declare class ItemClient extends BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions?: ClientArgs);
    /**
     * Get an Item by it's name
     * @param name The item name
     * @returns An Item
     */
    getItemByName(name: string): Promise<Item>;
    /**
     * Get an Item by it's ID
     * @param id The item ID
     * @returns An Item
     */
    getItemById(id: number): Promise<Item>;
    /**
     * Get an Item Attribute by it's name
     * @param name The item attribute name
     * @returns An Item Attribute
     */
    getItemAttributeByName(name: string): Promise<ItemAttribute>;
    /**
     * Get an Item Attribute by it's ID
     * @param id The item attribute ID
     * @returns An Item Attribute
     */
    getItemAttributeById(id: number): Promise<ItemAttribute>;
    /**
     * Get an Item Category by it's name
     * @param name The item category name
     * @returns An Item Category
     */
    getItemCategoryByName(name: string): Promise<ItemCategory>;
    /**
     * Get an Item Category by it's ID
     * @param id The item category ID
     * @returns An Item Category
     */
    getItemCategoryById(id: number): Promise<ItemCategory>;
    /**
     * Get an Item Filing Effect by it's name
     * @param name The item filing effect name
     * @returns An Item Filing Effect
     */
    getItemFlingEffectByName(name: string): Promise<ItemFlingEffect>;
    /**
     * Get an Item Filing Effect by it's ID
     * @param id The item filing effect ID
     * @returns An Item Filing Effect
     */
    getItemFlingEffectById(id: number): Promise<ItemFlingEffect>;
    /**
     * Get an Item Pocket by it's name
     * @param name The item pocket name
     * @returns An Item Pocket
     */
    getItemPocketByName(name: string): Promise<ItemPocket>;
    /**
     * Get an Item Pocket by it's ID
     * @param id The item pocket ID
     * @returns An Item Pocket
     */
    getItemPocketById(id: number): Promise<ItemPocket>;
    /**
     * List Items
     * @param offset The first item that you will get
     * @param limit How many Items per page
     * @returns A list of Items
     */
    listItems(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Item Attributes
     * @param offset The first item that you will get
     * @param limit How many Item Attributes per page
     * @returns A list of Item Attributes
     */
    listItemAttributes(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Item Categories
     * @param offset The first item that you will get
     * @param limit How many Item Categories per page
     * @returns A list of Item Categories
     */
    listItemCategories(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Item Filing Effects
     * @param offset The first item that you will get
     * @param limit How many Item Filing Effects per page
     * @returns A list of Item Filing Effects
     */
    listItemFilingEffects(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Item Pockets
     * @param offset The first item that you will get
     * @param limit How many Item Pockets per page
     * @returns A list of Item Pockets
     */
    listItemPockets(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
}

/**
 * ### Location Client
 *
 * Client used to access the Location Endpoints:
 *  - [Locations](https://pokeapi.co/docs/v2#locations)
 *  - [Location Areas](https://pokeapi.co/docs/v2#location-areas)
 *  - [Pal Park Areas](https://pokeapi.co/docs/v2#pal-park-areas)
 *  - [Regions](https://pokeapi.co/docs/v2#regions)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#locations-section)
 */
declare class LocationClient extends BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions?: ClientArgs);
    /**
     * Get a Location by it's name
     * @param name The Location name
     * @returns A Location
     */
    getLocationByName(name: string): Promise<Location>;
    /**
     * Get a Location by it's ID
     * @param id The Location ID
     * @returns A location
     */
    getLocationById(id: number): Promise<Location>;
    /**
     * Get a Location Area by it's name
     * @param name The Location Area name
     * @returns A Location Area
     */
    getLocationAreaByName(name: string): Promise<LocationArea>;
    /**
     * Get a Location Area by it's ID
     * @param id The Location Area ID
     * @returns A Location Area
     */
    getLocationAreaById(id: number): Promise<LocationArea>;
    /**
     * Get a Pal Park Area by it's name
     * @param name The Pal Park Area name
     * @returns A Pal Park Area
     */
    getPalParkAreaByName(name: string): Promise<PalParkArea>;
    /**
     * Get a Pal Park Area by it's ID
     * @param id The Pal Park Area ID
     * @returns A Pal Park Area
     */
    getPalParkAreaById(id: number): Promise<PalParkArea>;
    /**
     * Get a Region by it's name
     * @param name The Region name
     * @returns A Region
     */
    getRegionByName(name: string): Promise<Region>;
    /**
     * Get a Region by it's ID
     * @param id The Region ID
     * @returns A Region
     */
    getRegionById(id: number): Promise<Region>;
    /**
     * List Locations
     * @param offset The first item that you will get
     * @param limit How many Locations per page
     * @returns A list of Locations
     */
    listLocations(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Location Areas
     * @param offset The first item that you will get
     * @param limit How many Locations per page
     * @returns A list of Location Areas
     */
    listLocationAreas(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Pal Park Areas
     * @param offset The first item that you will get
     * @param limit How many Pal Park Areas per page
     * @returns A list of Pal Park Areas
     */
    listPalParkAreas(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Regions
     * @param offset The first item that you will get
     * @param limit How many Regions per page
     * @returns A list of Regions
     */
    listRegions(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
}

/**
 * ### Machine Client
 *
 * Client used to access the Machine Endpoints:
 *  - [Machines](https://pokeapi.co/docs/v2#machines)
 *
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#machines-section)
 */
declare class MachineClient extends BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions?: ClientArgs);
    /**
     * Get a Machine by it's ID
     * @param id The Machine ID
     * @returns A Machine
     */
    getMachineById(id: number): Promise<Machine>;
    /**
     * List Machines
     * @param offset The first item that you will get
     * @param limit How many Machines per page
     * @returns A list of Machines
     */
    listMachines(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
}

/**
 * ### Move Client
 *
 * Client used to access the Move Endpoints:
 *  - [Moves](https://pokeapi.co/docs/v2#moves)
 *  - [Move Ailments](https://pokeapi.co/docs/v2#move-ailments)
 *  - [Move Battle Styles](https://pokeapi.co/docs/v2#move-battle-styles)
 *  - [Move Categories](https://pokeapi.co/docs/v2#move-categories)
 *  - [Move Damage Classes](https://pokeapi.co/docs/v2#move-damage-classes)
 *  - [Move Learn Methods](https://pokeapi.co/docs/v2#move-learn-methods)
 *  - [Move Move Targets](https://pokeapi.co/docs/v2#move-targets)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#moves-section)
 */
declare class MoveClient extends BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions?: ClientArgs);
    /**
     * Get a Move by it's name
     * @param name The move name
     * @returns A Move
     */
    getMoveByName(name: string): Promise<Move>;
    /**
     * Get a Move by it's ID
     * @param id The Move ID
     * @returns A Move
     */
    getMoveById(id: number): Promise<Move>;
    /**
     * Get a Move Ailment by it's name
     * @param name The Move Ailment name
     * @returns A Move Ailment
     */
    getMoveAilmentByName(name: string): Promise<MoveAilment>;
    /**
     * Get a Move Ailment by it's ID
     * @param id The Move Ailment ID
     * @returns A Move Ailment
     */
    getMoveAilmentById(id: number): Promise<MoveAilment>;
    /**
     * Get a Move Battle Style by it's name
     * @param name The Move Battle Style name
     * @returns A Move Battle Style
     */
    getMoveBattleStyleByName(name: string): Promise<MoveBattleStyle>;
    /**
     * Get a Move Battle Style by it's ID
     * @param id The Move Battle Style ID
     * @returns A Move Battle Style
     */
    getMoveBattleStyleById(id: number): Promise<MoveBattleStyle>;
    /**
     * Get a Move Battle Category by it's name
     * @param name The Move Category name
     * @returns A Move Category
     */
    getMoveCategoryByName(name: string): Promise<MoveCategory>;
    /**
     * Get a Move Battle Category by it's ID
     * @param id The Move Category ID
     * @returns A Move Category
     */
    getMoveCategoryById(id: number): Promise<MoveCategory>;
    /**
     * Get a Move Damage Class by it's name
     * @param name The Move Damage Class name
     * @returns A Move Damage Class
     */
    getMoveDamageClassByName(name: string): Promise<MoveDamageClass>;
    /**
     * Get a Move Damage Class by it's ID
     * @param id The Move Damage Class ID
     * @returns A Move Damage Class
     */
    getMoveDamageClassById(id: number): Promise<MoveDamageClass>;
    /**
     * Get a Move Learn Method by it's name
     * @param name The Move Learn Method name
     * @returns A Move Learn Method
     */
    getMoveLearnMethodByName(name: string): Promise<MoveLearnMethod>;
    /**
     * Get a Move Learn Method by it's ID
     * @param id The Move Learn Method ID
     * @returns A Move Learn Method
     */
    getMoveLearnMethodById(id: number): Promise<MoveLearnMethod>;
    /**
     * Get a Move Target by it's name
     * @param name The Move Target name
     * @returns A Move Target
     */
    getMoveTargetByName(name: string): Promise<MoveTarget>;
    /**
     * Get a Move Target by it's ID
     * @param id The Move Target ID
     * @returns A Move Target
     */
    getMoveTargetById(id: number): Promise<MoveTarget>;
    /**
     * List Moves
     * @param offset The first item that you will get
     * @param limit How many Moves per page
     * @returns A list of Moves
     */
    listMoves(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Move Ailments
     * @param offset The first item that you will get
     * @param limit How many Move Ailments per page
     * @returns A list of Move Ailments
     */
    listMoveAilments(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Move Battle Styles
     * @param offset The first item that you will get
     * @param limit How many Move Battle Styles per page
     * @returns A list of Move Battle Styles
     */
    listMoveBattleStyles(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Move Categories
     * @param offset The first item that you will get
     * @param limit How many Move Categories per page
     * @returns A list of Move Categories
     */
    listMoveCategories(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Move Damage Classes
     * @param offset The first item that you will get
     * @param limit How many Move Damage Classes per page
     * @returns A list of Move Damage Classes
     */
    listMoveDamageClasses(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Move Learn Methods
     * @param offset The first item that you will get
     * @param limit How many Move Learn Methods per page
     * @returns A list of Move Learn Methods
     */
    listMoveLearnMethods(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Move Targets
     * @param offset The first item that you will get
     * @param limit How many Move Targets per page
     * @returns A list of Move Targets
     */
    listMoveTargets(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
}

/**
 * ### Pokemon Client
 *
 * Client used to access the Pokemon Endpoints:
 *  - [Abilities](https://pokeapi.co/docs/v2#abilities)
 *  - [Characteristics](https://pokeapi.co/docs/v2#characteristics)
 *  - [Egg Groups](https://pokeapi.co/docs/v2#egg-groups)
 *  - [Genders](https://pokeapi.co/docs/v2#genders)
 *  - [Growth Rates](https://pokeapi.co/docs/v2#growth-rates)
 *  - [Natures](https://pokeapi.co/docs/v2#natures)
 *  - [Pokeathlon Stats](https://pokeapi.co/docs/v2#pokeathlon-stats)
 *  - [Pokemon](https://pokeapi.co/docs/v2#pokemon)
 *  - [Pokemon Location Areas](https://pokeapi.co/docs/v2#pokemon-location-areas)
 *  - [Pokemon Colors](https://pokeapi.co/docs/v2#pokemon-colors)
 *  - [Pokemon Forms](https://pokeapi.co/docs/v2#pokemon-forms)
 *  - [Pokemon Habitats](https://pokeapi.co/docs/v2#pokemon-habitats)
 *  - [Pokemon Shapes](https://pokeapi.co/docs/v2#pokemon-shapes)
 *  - [Pokemon Species](https://pokeapi.co/docs/v2#pokemon-species)
 *  - [Stats](https://pokeapi.co/docs/v2#stats)
 *  - [Types](https://pokeapi.co/docs/v2#types)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#pokemon-section)
 */
declare class PokemonClient extends BaseClient {
    /**
     * @argument clientOptions Options for the client.
     */
    constructor(clientOptions?: ClientArgs);
    /**
     * Get an Ability by it's name
     * @param name The Ability name
     * @returns An Ability
     */
    getAbilityByName(name: string): Promise<Ability>;
    /**
     * Get an Ability by it's ID
     * @param id The Ability ID
     * @returns An Ability
     */
    getAbilityById(id: number): Promise<Ability>;
    /**
     * Get a Characteristic by it's ID
     * @param id The Characteristic ID
     * @returns A Characteristic
     */
    getCharacteristicById(id: number): Promise<Characteristic>;
    /**
     * Get an Egg Group by it's name
     * @param name The Egg Group name
     * @returns An Egg Group
     */
    getEggGroupByName(name: string): Promise<EggGroup>;
    /**
     * Get an Egg Group by it's ID
     * @param id The Egg Group ID
     * @returns An Egg Group
     */
    getEggGroupById(id: number): Promise<EggGroup>;
    /**
     * Get a Gender by it's name
     * @param name The gender name
     * @returns An Egg Group
     */
    getGenderByName(name: string): Promise<Gender>;
    /**
     * Get a Gender by it's ID
     * @param id The Gender ID
     * @returns A Gender
     */
    getGenderById(id: number): Promise<Gender>;
    /**
     * Get a Growth Rate by it's name
     * @param name The Growth Rate name
     * @returns A Growth Rate
     */
    getGrowthRateByName(name: string): Promise<GrowthRate>;
    /**
     * Get a Growth Rate by it's ID
     * @param id The Growth Rate ID
     * @returns A Growth Rate
     */
    getGrowthRateById(id: number): Promise<GrowthRate>;
    /**
     * Get a Nature by it's name
     * @param name The Nature name
     * @returns A Nature
     */
    getNatureByName(name: string): Promise<Nature>;
    /**
     * Get a Nature by it's ID
     * @param id The Nature ID
     * @returns A Nature
     */
    getNatureById(id: number): Promise<Nature>;
    /**
     * Get a Pokeathlon Stat by it's name
     * @param name The Pokeathlon Stat name
     * @returns A Pokeathlon Stat
     */
    getPokeathlonStatByName(name: string): Promise<PokeathlonStat>;
    /**
     * Get a Pokeathlon Stat by it's ID
     * @param id The Pokeathlon Stat ID
     * @returns A Pokeathlon Stat
     */
    getPokeathlonStatById(id: number): Promise<PokeathlonStat>;
    /**
     * Get a Pokemon by it's name
     * @param name The Pokemon name
     * @returns A Pokemon Stat
     */
    getPokemonByName(name: string): Promise<Pokemon>;
    /**
     * Get a Pokemon by it's ID
     * @param id The Pokemon ID
     * @returns A Pokemon
     */
    getPokemonById(id: number): Promise<Pokemon>;
    /**
     * Get a Pokemon Location Area by it's ID
     * @param id The Pokemon Location Area ID
     * @returns A Pokemon Location Area
     */
    getPokemonLocationAreaById(id: number): Promise<LocationAreaEncounter[]>;
    /**
     * Get a Pokemon Color by it's name
     * @param name The Pokemon Color name
     * @returns A Pokemon Color
     */
    getPokemonColorByName(name: string): Promise<PokemonColor>;
    /**
     * Get a Pokemon Color by it's ID
     * @param id The Pokemon Color ID
     * @returns A Pokemon Color
     */
    getPokemonColorById(id: number): Promise<PokemonColor>;
    /**
     * Get a Pokemon Form by it's name
     * @param name The Pokemon Form name
     * @returns A Pokemon Form
     */
    getPokemonFormByName(name: string): Promise<PokemonForm>;
    /**
     * Get a Pokemon Form by it's ID
     * @param id The Pokemon Form ID
     * @returns A Pokemon Form
     */
    getPokemonFormById(id: number): Promise<PokemonForm>;
    /**
     * Get a Pokemon Habitat by it's name
     * @param name The Pokemon Habitat name
     * @returns A Pokemon Habitat
     */
    getPokemonHabitatByName(name: string): Promise<PokemonHabitat>;
    /**
     * Get a Pokemon Habitat by it's ID
     * @param id The Pokemon Habitat Form ID
     * @returns A Pokemon Habitat
     */
    getPokemonHabitatById(id: number): Promise<PokemonHabitat>;
    /**
     * Get a Pokemon Shape by it's name
     * @param name The Pokemon Shape name
     * @returns A Pokemon Shape
     */
    getPokemonShapeByName(name: string): Promise<PokemonShape>;
    /**
     * Get a Pokemon Shape by it's ID
     * @param id The Pokemon Shape Form ID
     * @returns A Pokemon Shape
     */
    getPokemonShapeById(id: number): Promise<PokemonShape>;
    /**
     * Get a Pokemon Species by it's name
     * @param name The Pokemon Species name
     * @returns A Pokemon Species
     */
    getPokemonSpeciesByName(name: string): Promise<PokemonSpecies>;
    /**
     * Get a Pokemon Species by it's ID
     * @param id The Pokemon Species Form ID
     * @returns A Pokemon Species
     */
    getPokemonSpeciesById(id: number): Promise<PokemonSpecies>;
    /**
     * Get a Stat by it's name
     * @param name The Stat name
     * @returns A Stat
     */
    getStatByName(name: string): Promise<Stat>;
    /**
     * Get a Stat by it's ID
     * @param id The Stat ID
     * @returns A Stat
     */
    getStatById(id: number): Promise<Stat>;
    /**
     * Get a Type by it's name
     * @param name The Type name
     * @returns A Type
     */
    getTypeByName(name: string): Promise<Type>;
    /**
     * Get a Type by it's ID
     * @param id The Type ID
     * @returns A Type
     */
    getTypeById(id: number): Promise<Type>;
    /**
     * List Abilities
     * @param offset The first item that you will get
     * @param limit How many Abilities per page
     * @returns A list of Abilities
     */
    listAbilities(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Characteristics
     * @param offset The first item that you will get
     * @param limit How many Characteristics per page
     * @returns A list of Characteristics
     */
    listCharacteristics(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Egg Groups
     * @param offset The first item that you will get
     * @param limit How many Egg Groups per page
     * @returns A list of Egg Groups
     */
    listEggGroups(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Genders
     * @param offset The first item that you will get
     * @param limit How many Genders per page
     * @returns A list of Genders
     */
    listGenders(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Growth Rates
     * @param offset The first item that you will get
     * @param limit How many Growth Rates per page
     * @returns A list of Growth Rates
     */
    listGrowthRates(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Natures
     * @param offset The first item that you will get
     * @param limit How many Growth Natures per page
     * @returns A list of Natures
     */
    listNatures(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Pokeathlon Stats
     * @param offset The first item that you will get
     * @param limit How many Pokeathlon Stats per page
     * @returns A list of Pokeathlon Stats
     */
    listPokeathlonStats(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Pokemons
     * @param offset The first item that you will get
     * @param limit How many Pokemons Stats per page
     * @returns A list of Pokemons
     */
    listPokemons(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Pokemon Colors
     * @param offset The first item that you will get
     * @param limit How many Pokemon Colors per page
     * @returns A list of Pokemon Colors
     */
    listPokemonColors(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Pokemon Forms
     * @param offset The first item that you will get
     * @param limit How many Pokemon Forms per page
     * @returns A list of Pokemon Forms
     */
    listPokemonForms(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Pokemon Habitats
     * @param offset The first item that you will get
     * @param limit How many Pokemon Habitats per page
     * @returns A list of Pokemon Habitats
     */
    listPokemonHabitats(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Pokemon Shapes
     * @param offset The first item that you will get
     * @param limit How many Pokemon Shapes per page
     * @returns A list of Pokemon Shapes
     */
    listPokemonShapes(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Pokemon Species
     * @param offset The first item that you will get
     * @param limit How many Pokemon Species per page
     * @returns A list of Pokemon Species
     */
    listPokemonSpecies(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Stats
     * @param offset The first item that you will get
     * @param limit How many Stats per page
     * @returns A list of Stats
     */
    listStats(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
    /**
     * List Types
     * @param offset The first item that you will get
     * @param limit How many Types per page
     * @returns A list of Types
     */
    listTypes(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
}

/**
 * ### Utility Client
 *
 * Client used to access the Utility Endpoints:
 *  - [Languages](https://pokeapi.co/docs/v2#utility-section)
 *  - Resources
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#utility-section)
 */
declare class UtilityClient extends BaseClient {
    constructor(clientOptions?: ClientArgs);
    /**
     * Get a Language by it's ID
     * @param id The Language ID
     * @returns Language
     */
    getLanguageById(id: number): Promise<Language>;
    /**
     * Get a Language by it's name
     * @param name The Language name
     * @returns Language
     */
    getLanguageByName(name: string): Promise<Language>;
    /**
     * Get a Resource by it's url
     * @param url The Resource url
     * @returns Resource
     */
    getResourceByUrl<T>(url: string): Promise<T>;
    /**
     * List Languages
     * @param offset The first item that you will get
     * @param limit How many Languages per page
     * @returns A list of Languages
     */
    listLanguages(offset?: number, limit?: number): Promise<NamedAPIResourceList>;
}

/**
 * ### Main Client
 *
 * The main client used to access all the PokéAPI Endpoints:
 *  - [Berries](https://pokeapi.co/docs/v2#berries-section)
 *  - [Contests](https://pokeapi.co/docs/v2#contests-section)
 *  - [Encounters](https://pokeapi.co/docs/v2#encounters-section)
 *  - [Evolution](https://pokeapi.co/docs/v2#evolution-section)
 *  - [Games](https://pokeapi.co/docs/v2#games-section)
 *  - [Items](https://pokeapi.co/docs/v2#items-section)
 *  - [Locations](https://pokeapi.co/docs/v2#locations-section)
 *  - [Machines](https://pokeapi.co/docs/v2#machines-section)
 *  - [Moves](https://pokeapi.co/docs/v2#moves-section)
 *  - [Pokémon](https://pokeapi.co/docs/v2#pokemon-section)
 *  - [Utility](https://pokeapi.co/docs/v2#utility-section)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2)
 */
declare class MainClient extends BaseClient {
    berry: BerryClient;
    contest: ContestClient;
    encounter: EncounterClient;
    evolution: EvolutionClient;
    game: GameClient;
    item: ItemClient;
    location: LocationClient;
    machine: MachineClient;
    move: MoveClient;
    pokemon: PokemonClient;
    constructor(clientOptions?: ClientArgs);
}

declare enum BaseURL {
    REST = "https://pokeapi.co/api/v2"
}

/**
 * Endpoints of the PokéAPI
 */
declare enum Endpoints {
    Berry = "/berry",
    BerryFirmness = "/berry-firmness",
    BerryFlavor = "/berry-flavor",
    ContestType = "/contest-type",
    ContestEffect = "/contest-effect",
    SuperContestEffect = "/super-contest-effect",
    EncouterMethod = "/encounter-method",
    EncounterCondition = "/encounter-condition",
    EncouterConditionValue = "/encounter-condition-value",
    EvolutionChain = "/evolution-chain",
    EvolutionTrigger = "/evolution-trigger",
    Generation = "/generation",
    Pokedex = "/pokedex",
    Version = "/version",
    VersionGroup = "/version-group",
    Item = "/item",
    ItemAttribute = "/item-attribute",
    ItemCategory = "/item-category",
    ItemFlingEffect = "/item-fling-effect",
    ItemPocket = "/item-pocket",
    Location = "/location",
    LocationArea = "/location-area",
    PalParkArea = "/pal-park-area",
    Region = "/region",
    Machine = "/machine",
    Move = "/move",
    MoveAilment = "/move-ailment",
    MoveBattleStyle = "/move-battle-style",
    MoveCategory = "/move-category",
    MoveDamageClass = "/move-damage-class",
    MoveLearnMethod = "/move-learn-method",
    MoveTarget = "/move-target",
    Ability = "/ability",
    Characteristic = "/characteristic",
    EggGroup = "/egg-group",
    Gender = "/gender",
    GrowthRate = "/growth-rate",
    Nature = "/nature",
    PokeathlonStat = "/pokeathlon-stat",
    Pokemon = "/pokemon",
    PokemonLocationArea = "/pokemon/:id/encounters",
    PokemonColor = "/pokemon-color",
    PokemonForm = "/pokemon-form",
    PokemonHabitat = "/pokemon-habitat",
    PokemonShape = "/pokemon-shape",
    PokemonSpecies = "/pokemon-species",
    Stat = "/stat",
    Type = "/type",
    Language = "/language"
}

/** Enum of Berries (NAME - ID) */
declare enum Berries {
    CHERI = 1,
    CHESTO = 2,
    PECHA = 3,
    RAWST = 4,
    ASPEAR = 5,
    LEPPA = 6,
    ORAN = 7,
    PERSIM = 8,
    LUM = 9,
    SITRUS = 10,
    FIGY = 11,
    WIKI = 12,
    MAGO = 13,
    AGUAV = 14,
    IAPAPA = 15,
    RAZZ = 16,
    BLUK = 17,
    NANAB = 18,
    WEPEAR = 19,
    PINAP = 20,
    POMEG = 21,
    KELPSY = 22,
    QUALOT = 23,
    HONDEW = 24,
    GREPA = 25,
    TAMATO = 26,
    CORNN = 27,
    MAGOST = 28,
    RABUTA = 29,
    NOMEL = 30,
    SPELON = 31,
    PAMTRE = 32,
    WATMEL = 33,
    DURIN = 34,
    BELUE = 35,
    OCCA = 36,
    PASSHO = 37,
    WACAN = 38,
    RINDO = 39,
    YACHE = 40,
    CHOPLE = 41,
    KEBIA = 42,
    SHUCA = 43,
    COBA = 44,
    PAYAPA = 45,
    TANGA = 46,
    CHARTI = 47,
    KASIB = 48,
    HABAN = 49,
    COLBUR = 50,
    BABIRI = 51,
    CHILAN = 52,
    LIECHI = 53,
    GANLON = 54,
    SALAC = 55,
    PETAYA = 56,
    APICOT = 57,
    LANSAT = 58,
    STARF = 59,
    ENIGMA = 60,
    MICLE = 61,
    CUSTAP = 62,
    JABOCA = 63,
    ROWAP = 64
}
/** Enum of Berry Firmnesses (NAME - ID) */
declare enum BerryFirmnesses {
    VERY_SOFT = 1,
    SOFT = 2,
    HARD = 3,
    VERY_HARD = 4,
    SUPER_HARD = 5
}
declare enum BerryFlavors {
    SPICY = 1,
    DRY = 2,
    SWEET = 3,
    BITTER = 4,
    SOUR = 5
}

declare enum ContestTypes {
    COOL = 1,
    BEAUTY = 2,
    CUTE = 3,
    SMART = 4,
    TOUGH = 5
}

declare enum EncounterMethods {
    WALK = 1,
    OLD_ROD = 2,
    GOOD_ROD = 3,
    SUPER_ROD = 4,
    SURF = 5,
    ROCK_SMASH = 6,
    HEADBUTT = 7,
    DARK_GRASS = 8,
    GRASS_SPOTS = 9,
    CAVE_SPOTS = 10,
    BRIDGE_SPOTS = 11,
    SUPER_ROD_SPOTS = 12,
    SURF_SPOTS = 13,
    YELLOW_FLOWERS = 14,
    PURPLE_FLOWERS = 15,
    RED_FLOWERS = 16,
    ROUGH_TERRAIN = 17,
    GIFT = 18,
    GIFT_EGG = 19,
    ONLY_ONE = 20,
    POKEFLUTE = 21,
    HEADBUTT_LOW = 22,
    HEADBUTT_NORMAL = 23,
    HEADBUT_HIGH = 24,
    SQUIRT_BOTTLE = 25,
    WAILMER_PAIL = 26,
    SEAWEED = 27
}
declare enum EncounterConditions {
    SWARM = 1,
    TIME = 2,
    RADAR = 3,
    SLOT2 = 4,
    RADIO = 5,
    SEASON = 6,
    STARTER = 7,
    TV_OPTION = 8,
    STORY_PROGRESS = 9,
    OTHER = 10
}
declare enum EncounterConditionValues {
    SWARM_YES = 1,
    SWARM_NO = 2,
    TIME_MORNING = 3,
    TIME_DAY = 4,
    TIME_NIGHT = 5,
    RADAR_ON = 6,
    RADAR_OFF = 7,
    SLOT2_NONE = 8,
    SLOT2_RUBY = 9,
    SLOT2_SAPHIRE = 10,
    SLOT2_EMERALD = 11,
    SLOT2_FIRERED = 12,
    SLOT2_LEAFGREEN = 13,
    RADIO_OFF = 14,
    RADIO_HOEN = 15,
    RADIO_SINNOH = 16,
    SEASON_SPRING = 17,
    SEASON_SUMMER = 18,
    SWASON_AUTUMN = 19,
    SEASON_WINTER = 20,
    STARTER_BULBASAUR = 21,
    STARTER_SQUIRTLE = 22,
    STARTER_CHARMANDER = 23,
    STARTER_CHESPIN = 24,
    STARTER_FENNEKIN = 25,
    STARTER_FROAKIE = 26,
    TV_OPTION_BLUE = 27,
    TV_OPTION_RED = 28,
    STORY_PROGRESS_AWAKENED_BEASTS = 29,
    STORY_PROGRESS_BEAT_GALACTIC_CORONET = 30,
    STORY_PROGRESS_OAK_ETERNA_CITY = 31,
    STORY_PROGRESS_OAK_VERMILION_COPYCAT = 32,
    STORY_PROGRESS_MET_TORNADUS_THUNDURUS = 33,
    STORY_PROGRESS_BEAT_ELITE_FOUR_ROUND_TWO = 34,
    STORY_PROGRESS_HALL_OF_FAME = 35,
    STORY_PROGRESS_NONE = 36,
    STORY_PROGRESS_NATIONAL_DEX = 37,
    OTHER_NONE = 38,
    OTHER_SNORLAX_LL_BEAT_LEAGUE = 39
}

declare enum EvolutionTriggers {
    LEVEL_UP = 1,
    TRADE = 2,
    USE_ITEM = 3,
    SHED = 4,
    SPIN = 5,
    TOWER_OF_DARKNESS = 6,
    TOWER_OF_WATER = 7,
    THREE_CRITICAL_HITS = 8,
    TAKE_DAMAGE = 9,
    OTHER = 10
}

declare enum Generations {
    GENERATION_I = 1,
    GENERATION_II = 2,
    GENERATION_III = 3,
    GENERATION_IV = 4,
    GENERATION_V = 5,
    GENERATION_VI = 6,
    GENERATION_VII = 7,
    GENERATION_VIII = 8
}
declare enum Pokedexes {
    NATIONAL = 1,
    KANTO = 2,
    ORIGINAL_JOHTO = 3,
    HOENN = 4,
    ORIGINAL_SINNOH = 5,
    EXTENDED_SINNOH = 6,
    UPDATED_JOHTO = 7,
    ORIGINAL_UNOVA = 8,
    UPDATED_UNOVA = 9,
    CONQUEST_GALLERY = 11,
    KALOS_CENTRAL = 12,
    KALOS_COASTAL = 13,
    KALOS_MONTAIN = 14,
    UPDATED_HOENN = 15,
    ORIGINAL_ALOLA = 16,
    ORIGINAL_MELEMELE = 17,
    ORIGINAL_AKALA = 18,
    ORIGINAL_ULAULA = 19,
    ORIGINAL_PONI = 20,
    UPDATED_ALOLA = 21,
    UPDATED_MELEMELE = 22,
    UPDATED_AKALA = 23,
    UPDATED_ULAULA = 24,
    UPDATED_PONI = 25,
    UPDATED_KANTO = 26,
    GALAR = 27,
    ISLE_OF_ARMOR = 28,
    CROWN_TUNDRA = 29
}
declare enum Versions {
    RED = 1,
    BLUE = 2,
    YELLOW = 3,
    GOLD = 4,
    SILVER = 5,
    CRYSTAL = 6,
    RUBY = 7,
    SAPPHIRE = 8,
    EMERALD = 9,
    FIRERED = 10,
    LEAFGREEN = 11,
    DIAMOND = 12,
    PEARL = 13,
    PLATINUM = 14,
    HEARTGOLD = 15,
    SOULSILVER = 16,
    BLACK = 17,
    WHITE = 18,
    COLOSSEUM = 19,
    XD = 20,
    BLACK_2 = 21,
    WHITE_2 = 22,
    X = 23,
    Y = 24,
    OMEGA_RUBY = 25,
    ALPHA_SAPPHIRE = 26,
    SUN = 27,
    MOON = 28,
    ULTRA_SUN = 29,
    ULTRA_MOON = 30,
    LETS_GO_PIKACHU = 31,
    LETS_GO_EEVEE = 32,
    SWORD = 33,
    SHIELD = 34,
    THE_ISLE_OF_ARMOR = 35,
    THE_CROWN_TUNDRA = 36,
    BRILLIANT_DIAMOND = 37,
    SHINING_PEARL = 38,
    LEGENDS_ARCEUS = 39
}
declare enum VersionGroups {
    RED_BLUE = 1,
    YELLOW = 2,
    GOLD_SILVER = 3,
    CRYSTAL = 4,
    RUBY_SAPPHIRE = 5,
    EMERALD = 6,
    FIRERED_LEAFGREEN = 7,
    DIAMOND_PEARL = 8,
    PLATINUM = 9,
    HEARTGOLD_SOULSILVER = 10,
    BLACK_WHITE = 11,
    COLOSSEUM = 12,
    XD = 13,
    BLACK_2_WHITE_2 = 14,
    X_Y = 15,
    OMEGA_RUBY_ALPHA_SAPPHIRE = 16,
    SUN_MOON = 17,
    ULTRA_SUN_ULTRA_MOON = 18,
    LETS_GO = 19,
    SWORD_SHIELD = 20,
    THE_ISLE_OF_ARMOR = 21,
    THE_CROWN_TUNDRA = 22,
    BRILLIANT_DIAMOND_AND_SHINING_PEARL = 23,
    LEGENDS_ARCEUS = 24
}

declare enum Regions {
    KANTO = 1,
    JOHTO = 2,
    HOENN = 3,
    SINNOH = 4,
    UNOVA = 5,
    KALOS = 6,
    ALOLA = 7,
    GALAR = 8,
    HISUI = 9
}
declare enum PalParkAreas {
    FOREST = 1,
    FIELD = 2,
    MOUNTAIN = 3,
    POND = 4,
    SEA = 5
}

declare enum MoveAilmtents {
    UNKNOWN = -1,
    NONE = 0,
    PARALYSIS = 1,
    SLEEP = 2,
    FREEZE = 3,
    BURN = 4,
    POISON = 5,
    CONFUSION = 6,
    INFATUATION = 7,
    TRAP = 8,
    NIGHTMARE = 9,
    TORMENT = 12,
    DISABLE = 13,
    YAWN = 14,
    HEAL_BLOCK = 15,
    NO_TYPE_IMMUNITY = 17,
    LEECH_SEED = 18,
    EMBARGO = 19,
    PERISH_SONG = 20,
    INGRAIN = 21,
    SILENCE = 24,
    TAR_SHOT = 42
}
declare enum MoveBattleStyles {
    ATTACK = 1,
    DEFENSE = 2,
    SUPPORT = 3
}
declare enum MoveCategories {
    DAMAGE = 0,
    AILMENT = 1,
    NET_GOOD_STATS = 2,
    HEAL = 3,
    DAMAGE_AILMENT = 4,
    SWAGGER = 5,
    DAMAGE_LOWER = 6,
    DAMAGE_RAISE = 7,
    DAMAGE_HEAL = 8,
    OHKO = 9,
    WHOLE_FIELD_EFFECT = 10,
    FIELD_EFFECT = 11,
    FORCE_SWITCH = 12,
    UNIQUE = 13
}
declare enum MoveDamageClasses {
    STATUS = 1,
    PHYSICAL = 2,
    SPECIAL = 3
}
declare enum MoveLearnMethods {
    LEVEL_UP = 1,
    EGG = 2,
    TUTOR = 3,
    MACHINE = 4,
    STADIUM_SURFING_PIKACHU = 5,
    LIGHT_BALL_EGG = 6,
    COLOSSEUM_PURIFICATION = 7,
    XD_SHADOW = 8,
    XD_PURIFICATION = 9,
    FORM_CHANGE = 10
}
declare enum MoveTargets {
    SPECIFIC_MOVE = 1,
    SELECTED_POKEMON_ME_FIRST = 2,
    ALLY = 3,
    USERS_FIELD = 4,
    USER_OR_ALLY = 5,
    OPPONENTS_FIELD = 6,
    USER = 7,
    RANDOM_OPPONENT = 8,
    ALL_OTHER_POKEMON = 9,
    SELECTED_POKEMON = 10,
    ALL_OPPONENTS = 11,
    ENTIRE_FIELD = 12,
    USER_AND_ALIES = 13,
    ALL_POKEMON = 14,
    ALL_ALLIES = 15
}

declare enum EggGroups {
    MONSTER = 1,
    WATER1 = 2,
    BUG = 3,
    FLYING = 4,
    GROUND = 5,
    FAIRY = 6,
    PLANT = 7,
    HUMANSHAPE = 8,
    WATER3 = 9,
    MINERAL = 10,
    INDETERMINATE = 11,
    WATER2 = 12,
    DITTO = 13,
    DRAGON = 14,
    NO_EGGS = 15
}
declare enum Genders {
    FEMALE = 1,
    MALE = 2,
    GENDERLESS = 3
}
declare enum GrowthRates {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3,
    MEDIUM_SLOW = 4,
    SLOW_THEN_VERY_FAST = 5,
    FAST_THEN_VERY_SLOW = 6
}
declare enum Natures {
    HARDY = 1,
    BOLD = 2,
    MODEST = 3,
    CALM = 4,
    TIMID = 5,
    LONELY = 6,
    DOCILE = 7,
    MILD = 8,
    GENTLE = 9,
    HASTY = 10,
    ADAMANT = 11,
    IMPISH = 12,
    BASHFUL = 13,
    CAREFUL = 14,
    RASH = 15,
    JOLLY = 16,
    NAUGHTY = 17,
    LAX = 18,
    QUIRKY = 19,
    NAIVE = 20,
    BRAVE = 21,
    RELAXED = 22,
    QUIET = 23,
    SASSY = 24,
    SERIOUS = 25
}
declare enum PokeathlonStats {
    SPEED = 1,
    POWER = 2,
    SKILL = 3,
    STAMINA = 4,
    JUMP = 5
}
declare enum PokemonColors {
    BLACK = 1,
    BLUE = 2,
    BROWN = 3,
    GRAY = 4,
    GREEN = 5,
    PINK = 6,
    PURPLE = 7,
    RED = 8,
    WHITE = 9,
    YELLOW = 10
}
declare enum PokemonHabitats {
    CAVE = 1,
    FOREST = 2,
    GRASSLAND = 3,
    MONTAIN = 4,
    RARE = 5,
    ROUGH_TERRAIN = 6,
    SEA = 7,
    URBAN = 8,
    WATERS_EDGE = 9
}
declare enum PokemonShapes {
    BALL = 1,
    SQUIGGLE = 2,
    FISH = 3,
    ARMS = 4,
    BLOB = 5,
    UPRIGHT = 6,
    LEGS = 7,
    QUADRUPED = 8,
    WINGS = 9,
    TENTACLES = 10,
    HEADS = 11,
    HUMANOID = 12,
    BUG_WINGS = 13,
    ARMOR = 14
}
declare enum Stats {
    HP = 1,
    ATTACK = 2,
    DEFENSE = 3,
    SPECIAL_ATTACK = 4,
    SPECIAL_DEFENSE = 5,
    SPEED = 6,
    ACCURACY = 7,
    EVASION = 8
}
declare enum Types {
    NORMAL = 1,
    FIGHTING = 2,
    FLYING = 3,
    POISON = 4,
    GROUND = 5,
    ROCK = 6,
    BUG = 7,
    GHOST = 8,
    STEEL = 9,
    FIRE = 10,
    WATER = 11,
    GRASS = 12,
    ELECTRIC = 13,
    PSYCHIC = 14,
    ICE = 15,
    DRAGON = 16,
    DARK = 17,
    FAIRY = 18,
    UNKNOWN = 10001,
    SHADOW = 10002
}

declare enum Languages {
    JA_HRKT = 1,
    ROOMAJI = 2,
    KO = 3,
    ZH_HANT = 4,
    FR = 5,
    DE = 6,
    ES = 7,
    IT = 8,
    EN = 9,
    CS = 10,
    JA = 11,
    ZH_HANS = 12,
    PT_BR = 13
}

declare enum ItemAttributes {
    COUNTABLE = 1,
    CONSUMABLE = 2,
    USABLE_OVERWORLD = 3,
    USABLE_IN_BATTLE = 4,
    HOLDABLE = 5,
    HOLDABLE_PASSIVE = 6,
    HOLDABLE_ACTIVE = 7,
    UNDERGROUND = 8
}
declare enum ItemCategories {
    STAT_BOOSTS = 1,
    EFFORT_DROP = 2,
    MEDICINE = 3,
    OTHER = 4,
    IN_A_PINCH = 5,
    PICKY_HEALING = 6,
    TYPE_PROTECTION = 7,
    BAKING_ONLY = 8,
    COLLECTIBLES = 9,
    EVOLUTION = 10,
    SPELUNKING = 11,
    HELD_ITEMS = 12,
    CHOICE = 13,
    EFFORT_TRAINING = 14,
    BAD_HELD_ITEMS = 15,
    TRAINING = 16,
    PLATES = 17,
    SPECIES_SPECIFIC = 18,
    TYPE_ENHANCEMENT = 19,
    EVENT_ITEMS = 20,
    GAMEPLAY = 21,
    PLOT_ADVANCEMENT = 22,
    UNUSED = 23,
    LOOT = 24,
    ALL_MAIL = 25,
    VITAMINS = 26,
    HEALING = 27,
    PP_RECOVERY = 28,
    REVIVAL = 29,
    STATUS_CURES = 30,
    MULCH = 32,
    SPECIAL_BALLS = 33,
    STANDARD_BALLS = 34,
    DEX_COMPLETION = 35,
    SCARVES = 36,
    ALL_MACHINES = 37,
    FLUTES = 38,
    APRICORN_BALLS = 39,
    APRICORN_BOX = 40,
    DATA_CARDS = 41,
    JEWELS = 42,
    MIRACLE_SHOOTER = 43,
    MEGA_STONES = 44,
    MEMORIES = 45,
    Z_CRYSTALS = 46,
    SPECIES_CANDIES = 47,
    CATCHING_BONUS = 48,
    DYNAMAX_CRISTALS = 49,
    NATURE_MINTS = 50,
    CURRY_INGREDIENTS = 51
}
declare enum ItemFlingEffects {
    BADLY_POISON = 1,
    BURN = 2,
    BERRY_EFFECT = 3,
    HERB_EFFECT = 4,
    PARALYZE = 5,
    POISON = 6,
    FLINCH = 7
}
declare enum ItemPockets {
    MISC = 1,
    MEDICINE = 2,
    POKEBALLS = 3,
    MACHINES = 4,
    BERRIES = 5,
    MAIL = 6,
    BATTLE = 7,
    KEY = 8
}

type index_BaseURL = BaseURL;
declare const index_BaseURL: typeof BaseURL;
type index_Berries = Berries;
declare const index_Berries: typeof Berries;
type index_BerryFirmnesses = BerryFirmnesses;
declare const index_BerryFirmnesses: typeof BerryFirmnesses;
type index_BerryFlavors = BerryFlavors;
declare const index_BerryFlavors: typeof BerryFlavors;
type index_ContestTypes = ContestTypes;
declare const index_ContestTypes: typeof ContestTypes;
type index_EggGroups = EggGroups;
declare const index_EggGroups: typeof EggGroups;
type index_EncounterConditionValues = EncounterConditionValues;
declare const index_EncounterConditionValues: typeof EncounterConditionValues;
type index_EncounterConditions = EncounterConditions;
declare const index_EncounterConditions: typeof EncounterConditions;
type index_EncounterMethods = EncounterMethods;
declare const index_EncounterMethods: typeof EncounterMethods;
type index_Endpoints = Endpoints;
declare const index_Endpoints: typeof Endpoints;
type index_EvolutionTriggers = EvolutionTriggers;
declare const index_EvolutionTriggers: typeof EvolutionTriggers;
type index_Genders = Genders;
declare const index_Genders: typeof Genders;
type index_Generations = Generations;
declare const index_Generations: typeof Generations;
type index_GrowthRates = GrowthRates;
declare const index_GrowthRates: typeof GrowthRates;
type index_ItemAttributes = ItemAttributes;
declare const index_ItemAttributes: typeof ItemAttributes;
type index_ItemCategories = ItemCategories;
declare const index_ItemCategories: typeof ItemCategories;
type index_ItemFlingEffects = ItemFlingEffects;
declare const index_ItemFlingEffects: typeof ItemFlingEffects;
type index_ItemPockets = ItemPockets;
declare const index_ItemPockets: typeof ItemPockets;
type index_Languages = Languages;
declare const index_Languages: typeof Languages;
type index_MoveAilmtents = MoveAilmtents;
declare const index_MoveAilmtents: typeof MoveAilmtents;
type index_MoveBattleStyles = MoveBattleStyles;
declare const index_MoveBattleStyles: typeof MoveBattleStyles;
type index_MoveCategories = MoveCategories;
declare const index_MoveCategories: typeof MoveCategories;
type index_MoveDamageClasses = MoveDamageClasses;
declare const index_MoveDamageClasses: typeof MoveDamageClasses;
type index_MoveLearnMethods = MoveLearnMethods;
declare const index_MoveLearnMethods: typeof MoveLearnMethods;
type index_MoveTargets = MoveTargets;
declare const index_MoveTargets: typeof MoveTargets;
type index_Natures = Natures;
declare const index_Natures: typeof Natures;
type index_PalParkAreas = PalParkAreas;
declare const index_PalParkAreas: typeof PalParkAreas;
type index_PokeathlonStats = PokeathlonStats;
declare const index_PokeathlonStats: typeof PokeathlonStats;
type index_Pokedexes = Pokedexes;
declare const index_Pokedexes: typeof Pokedexes;
type index_PokemonColors = PokemonColors;
declare const index_PokemonColors: typeof PokemonColors;
type index_PokemonHabitats = PokemonHabitats;
declare const index_PokemonHabitats: typeof PokemonHabitats;
type index_PokemonShapes = PokemonShapes;
declare const index_PokemonShapes: typeof PokemonShapes;
type index_Regions = Regions;
declare const index_Regions: typeof Regions;
type index_Stats = Stats;
declare const index_Stats: typeof Stats;
type index_Types = Types;
declare const index_Types: typeof Types;
type index_VersionGroups = VersionGroups;
declare const index_VersionGroups: typeof VersionGroups;
type index_Versions = Versions;
declare const index_Versions: typeof Versions;
declare namespace index {
  export {
    index_BaseURL as BaseURL,
    index_Berries as Berries,
    index_BerryFirmnesses as BerryFirmnesses,
    index_BerryFlavors as BerryFlavors,
    index_ContestTypes as ContestTypes,
    index_EggGroups as EggGroups,
    index_EncounterConditionValues as EncounterConditionValues,
    index_EncounterConditions as EncounterConditions,
    index_EncounterMethods as EncounterMethods,
    index_Endpoints as Endpoints,
    index_EvolutionTriggers as EvolutionTriggers,
    index_Genders as Genders,
    index_Generations as Generations,
    index_GrowthRates as GrowthRates,
    index_ItemAttributes as ItemAttributes,
    index_ItemCategories as ItemCategories,
    index_ItemFlingEffects as ItemFlingEffects,
    index_ItemPockets as ItemPockets,
    index_Languages as Languages,
    index_MoveAilmtents as MoveAilmtents,
    index_MoveBattleStyles as MoveBattleStyles,
    index_MoveCategories as MoveCategories,
    index_MoveDamageClasses as MoveDamageClasses,
    index_MoveLearnMethods as MoveLearnMethods,
    index_MoveTargets as MoveTargets,
    index_Natures as Natures,
    index_PalParkAreas as PalParkAreas,
    index_PokeathlonStats as PokeathlonStats,
    index_Pokedexes as Pokedexes,
    index_PokemonColors as PokemonColors,
    index_PokemonHabitats as PokemonHabitats,
    index_PokemonShapes as PokemonShapes,
    index_Regions as Regions,
    index_Stats as Stats,
    index_Types as Types,
    index_VersionGroups as VersionGroups,
    index_Versions as Versions,
  };
}

export { APIResource, Ability, AbilityEffectChange, AbilityFlavorText, AbilityPokemon, Animated, AwesomeName, BaseClient, BaseURL, Berries, Berry, BerryClient, BerryFirmness, BerryFirmnesses, BerryFlavor, BerryFlavorMap, BerryFlavors, BlackWhite, ChainLink, Characteristic, ClientArgs, index as Constants, ContestClient, ContestComboDetail, ContestComboSets, ContestEffect, ContestName, ContestType, ContestTypes, Crystal, Description, DiamondPearl, DreamWorld, Effect, EggGroup, EggGroups, Emerald, Encounter, EncounterClient, EncounterCondition, EncounterConditionValue, EncounterConditionValues, EncounterConditions, EncounterMethod, EncounterMethodRate, EncounterMethods, EncounterVersionDetails, Endpoints, EvolutionChain, EvolutionClient, EvolutionDetail, EvolutionTrigger, EvolutionTriggers, FireredLeafgreen, FlavorBerryMap, FlavorText, GameClient, Gender, Genders, Generation, GenerationGameIndex, GenerationIIISprites, GenerationIISprites, GenerationISprites, GenerationIVSprites, GenerationVIIISprites, GenerationVIISprites, GenerationVISprites, GenerationVSprites, GenerationViiIcons, GenerationViiiIcons, Generations, Genus, Gold, GrowthRate, GrowthRateExperienceLevel, GrowthRates, HeartgoldSoulsilver, Home, Item, ItemAttribute, ItemAttributes, ItemCategories, ItemCategory, ItemClient, ItemFlingEffect, ItemFlingEffects, ItemHolderPokemon, ItemHolderPokemonVersionDetail, ItemPocket, ItemPockets, ItemSprites, Language, Languages, Location, LocationArea, LocationAreaEncounter, LocationClient, Machine, MachineClient, MachineVersionDetail, MainClient, Move, MoveAilment, MoveAilmtents, MoveBattleStyle, MoveBattleStylePreference, MoveBattleStyles, MoveCategories, MoveCategory, MoveClient, MoveDamageClass, MoveDamageClasses, MoveFlavorText, MoveLearnMethod, MoveLearnMethods, MoveMetaData, MoveStatAffect, MoveStatAffectSets, MoveStatChange, MoveTarget, MoveTargets, Name, NamedAPIResource, NamedAPIResourceList, Nature, NaturePokeathlonStatAffect, NaturePokeathlonStatAffectSets, NatureStatAffectSets, NatureStatChange, Natures, OmegarubyAlphasapphire, OtherPokemonSprites, PalParkArea, PalParkAreas, PalParkEncounterArea, PalParkEncounterSpecies, PastMoveStatValues, Platinum, PokeathlonStat, PokeathlonStats, Pokedex, Pokedexes, Pokemon, PokemonAbility, PokemonClient, PokemonColor, PokemonColors, PokemonEncounter, PokemonEntry, PokemonForm, PokemonFormSprites, PokemonHabitat, PokemonHabitats, PokemonHeldItem, PokemonHeldItemVersion, PokemonMove, PokemonMoveVersion, PokemonPastType, PokemonShape, PokemonShapes, PokemonSpecies, PokemonSpeciesDexEntry, PokemonSpeciesGender, PokemonSpeciesVariety, PokemonSprites, PokemonStat, PokemonType, RedBlue, Region, Regions, RubySapphire, Stat, Stats, SuperContestEffect, Type, TypePokemon, TypeRelations, Types, UltraSunUltraMoon, UtilityClient, VerboseEffect, Version, VersionEncounterDetail, VersionGameIndex, VersionGroup, VersionGroupFlavorText, VersionGroups, VersionSprites, Versions, XY, Yellow };
