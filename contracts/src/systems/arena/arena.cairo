#[dojo::interface]
trait IArena<TContractState> {
    fn enter_arena(ref world: IWorldDispatcher);
    fn exit_arena(ref world: IWorldDispatcher);
    fn fight(ref world: IWorldDispatcher);
    fn flee(ref world: IWorldDispatcher);
}

#[dojo::contract]
mod arena_systems {
    use super::{IArena};
    use starknet::{ContractAddress, get_caller_address};
}