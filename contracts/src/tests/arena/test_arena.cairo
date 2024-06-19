#[cfg(test)]
mod tests {
    use starknet::{ContractAddress, get_caller_address};
    use starknet::class_hash::Felt252TryIntoClassHash;
    // import world dispatcher
    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
    use gladiethers::{models::{arena::{GladietherArena, GameStatus}}};

    fn setup_game() -> (IWorldDispatcher, GladietherArena, ContractAddress) {
        let player_one = starknet::contract_address_const::<0x0>();
    }

    #[test]
    fn test_enter_arena() {}

    #[test]
    fn test_gladiether_match() {}

    #[test]
    fn test_gladiether_attack() {}

    #[test]
    fn test_gladiether_power() {}

    #[test]
    fn test_crown_new_gladiether_king() {}

    #[test]
    fn test_gladiether_king_attack() {}

    #[test]
    fn test_arena_exit() {}
}
